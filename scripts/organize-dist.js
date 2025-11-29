#!/usr/bin/env node
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { glob } from 'glob';
import { copyFileSync, rmSync } from 'fs';

const dist = new URL('../dist', import.meta.url).pathname;
const assetsDir = join(dist, 'assets');
const cssDir = join(dist, 'css');
const jsDir = join(dist, 'js');
const imagesDir = join(dist, 'images');

if (!existsSync(assetsDir)) {
  console.log('No assets directory in dist. Skipping asset reorganization.');
  // Ensure target folders exist anyway for teacher structure
  mkdirSync(cssDir, { recursive: true });
  mkdirSync(jsDir, { recursive: true });
  mkdirSync(imagesDir, { recursive: true });
  // Optionally rewrite index.html only if it references /assets/ (rare in this setup)
  const indexPath = join(dist, 'index.html');
  if (existsSync(indexPath)) {
    let html = readFileSync(indexPath, 'utf-8');
    const hadAssets = html.includes('/assets/');
    if (hadAssets) {
      html = html.replace(/(src|href)="\/assets\/([^"]+)"/g, (m, attr, file) => {
        if (file.endsWith('.css')) return `${attr}="/css/${file}`;
        if (file.endsWith('.js')) return `${attr}="/js/${file}`;
        return `${attr}="/images/${file}`;
      });
      writeFileSync(indexPath, html);
    }
  }
  console.log('Created css/, js/, images/ placeholders.');
  process.exit(0);
}

mkdirSync(cssDir, { recursive: true });
mkdirSync(jsDir, { recursive: true });
mkdirSync(imagesDir, { recursive: true });

// Move CSS files
for (const file of glob.sync(join(assetsDir, '*.css'))) {
  const base = file.split('/').pop();
  copyFileSync(file, join(cssDir, base));
}
// Move JS files
for (const file of glob.sync(join(assetsDir, '*.js'))) {
  const base = file.split('/').pop();
  copyFileSync(file, join(jsDir, base));
}
// Move images (png,jpg,jpeg,webp,svg)
for (const file of glob.sync(join(assetsDir, '*.{png,jpg,jpeg,webp,svg}'))) {
  const base = file.split('/').pop();
  copyFileSync(file, join(imagesDir, base));
}

// Rewrite index.html references from /assets/... to /css|/js|/images
const indexPath = join(dist, 'index.html');
let html = readFileSync(indexPath, 'utf-8');
html = html
  .replaceAll('/assets/', '/js/') // default Vite injects JS first
  .replaceAll('rel="stylesheet" href="/js/', 'rel="stylesheet" href="/css/')
  .replaceAll('href="/js/', 'href="/css/') // stylesheet links
  .replaceAll('src="/js/', 'src="/js/') // keep js
  .replaceAll('src="/css/', 'src="/images/') // image tags accidental
  ;
// More robust replacement: map by file extension
html = html.replace(/(src|href)="\/assets\/([^"]+)"/g, (m, attr, file) => {
  if (file.endsWith('.css')) return `${attr}="/css/${file}"`;
  if (file.endsWith('.js')) return `${attr}="/js/${file}"`;
  return `${attr}="/images/${file}"`;
});
writeFileSync(indexPath, html);

// Optionally remove original assets dir to avoid confusion
rmSync(assetsDir, { recursive: true, force: true });

console.log('Organized dist: css/, js/, images/ with updated index.html');
