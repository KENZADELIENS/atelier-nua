const { chromium } = require('playwright');
const child = require('child_process');
const fs = require('fs');
const path = require('path');

async function startServer() {
  // start sirv to serve ./dist on port 5000
  const port = process.env.PRERENDER_PORT || '5110';

  // make asset paths relative in dist/index.html so the local server can
  // load JS/CSS correctly (the app was built with base '/atelier-nua/')
  try {
    const indexPath = path.join(process.cwd(), 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, 'utf8');
        // Make asset paths absolute from the site root so they resolve
        // correctly when the headless browser visits nested routes.
        // e.g. "./assets/..." -> "/assets/..."
        html = html.replace(/\.\/assets\//g, '/assets/');
        // Also fix any remaining absolute base references if present
        html = html.replace(/\/atelier-nua\//g, '/');
      fs.writeFileSync(indexPath, html, 'utf8');
      console.log('Rewrote asset paths in dist/index.html to be relative');
    }
  } catch (e) {
    console.warn('Failed to rewrite dist/index.html', e);
  }

  // Start a simple static HTTP server (no external CLI) that serves files
  // from ./dist and falls back to index.html for SPA routes.
  const http = require('http');
  const url = require('url');
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
  };

  const server = http.createServer((req, res) => {
    try {
      const parsed = url.parse(req.url || '/');
      let pathname = decodeURIComponent(parsed.pathname || '/');
      // Prevent directory traversal
      if (pathname.includes('..')) pathname = '/';
      let filePath = path.join(process.cwd(), 'dist', pathname.replace(/^\//, ''));
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        // Fallback to dist/index.html for SPA routes
        filePath = path.join(process.cwd(), 'dist', 'index.html');
      }
      const ext = path.extname(filePath).toLowerCase();
      const type = mime[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      stream.on('error', (err) => {
        res.writeHead(500);
        res.end('Server error');
      });
    } catch (err) {
      res.writeHead(500);
      res.end('Server error');
    }
  });

  await new Promise((resolve, reject) => {
    server.listen(Number(port), (err) => {
      if (err) return reject(err);
      console.log('Static server listening on port', port);
      resolve();
    });
  });

  // return an object with a kill-like method for compatibility with previous code
  return { kill: () => server.close(), close: () => server.close() };
}

async function render() {
  const routes = ['/', '/exhibitions', '/exhibitions/1', '/exhibitions/2', '/exhibitions/3', '/exhibitions/4', '/exhibitions/5'];
  const server = await startServer();

  // wait a short time for the server to start
  await new Promise((r) => setTimeout(r, 1000));

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const port = process.env.PRERENDER_PORT || '5110';
  for (const route of routes) {
    const url = `http://localhost:${port}${route}`;
    console.log('Rendering', url);
    // Navigate and wait for network to be idle, then wait for the
    // client app to hydrate by checking that #root has children.
    await page.goto(url, { waitUntil: 'networkidle' });
    try {
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.children && root.children.length > 0;
      }, { timeout: 5000 });
    } catch (err) {
      // If the wait fails, continue — we'll still capture whatever DOM exists.
      console.warn('Hydration wait timed out for', url);
    }

    const html = await page.content();

    // Write to dist/<route>/index.html (handle root)
    const outDir = path.join('dist', route === '/' ? '' : route.replace(/^\//, ''));
    const targetDir = route === '/' ? path.join('dist') : path.join('dist', route.replace(/^\//, ''));
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const outPath = route === '/' ? path.join('dist', 'index.html') : path.join(targetDir, 'index.html');
    fs.writeFileSync(outPath, html, 'utf8');
    console.log('Wrote', outPath);
  }

  await browser.close();
  // close the local server
  if (server && typeof server.kill === 'function') server.kill();
}

render().catch((e) => {
  console.error(e);
  process.exit(1);
});
