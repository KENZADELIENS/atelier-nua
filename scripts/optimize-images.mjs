import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SRC_DIR = path.resolve('src/assets');

async function toWebp(inputPath, outputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width || 0;
  const target = Math.min(width, 2000); // cap width to 2000px
  await image
    .resize({ width: target || undefined, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(outputPath);
}

async function run() {
  const entries = fs.readdirSync(SRC_DIR);
  const pngs = entries.filter((f) => f.toLowerCase().endsWith('.png'));
  if (pngs.length === 0) {
    console.log('No PNGs found in src/assets');
    return;
  }
  console.log('Optimizing', pngs.length, 'images...');

  for (const file of pngs) {
    const input = path.join(SRC_DIR, file);
    const out = path.join(SRC_DIR, file.replace(/\.png$/i, '.webp'));
    if (fs.existsSync(out)) {
      console.log('Skip existing', path.basename(out));
      continue;
    }
    await toWebp(input, out);
    const before = fs.statSync(input).size;
    const after = fs.statSync(out).size;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`✓ ${file} -> ${path.basename(out)}  (-${saved}%)`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
