import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve, basename, extname } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function makeResponsivePng(srcPath, widths = [480, 768, 1280]) {
  const absSrc = resolve(root, srcPath);
  const dir = dirname(absSrc);
  const name = basename(absSrc, extname(absSrc));
  const outputs = [];
  for (const w of widths) {
    const out = resolve(dir, `${name}-w${w}.png`);
    await sharp(absSrc).resize({ width: w, withoutEnlargement: true }).png({ quality: 90 }).toFile(out);
    outputs.push(out);
  }
  return outputs;
}

async function main() {
  // First hero (LCP) image
  const heroSrc = 'src/assets/c78f50749baacae6135ece7238683ff93f4df028.png';
  await ensureDir(dirname(resolve(root, heroSrc)));
  await makeResponsivePng(heroSrc);
  console.log('Responsive variants generated for hero image.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
