#!/usr/bin/env node
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { stat } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsDir = join(__dirname, '../src/assets');

async function optimizeImages() {
  console.log('🖼️  Optimizing images in src/assets...\n');
  
  const files = await readdir(assetsDir);
  const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');
  
  let totalBefore = 0;
  let totalAfter = 0;
  
  for (const file of pngFiles) {
    const inputPath = join(assetsDir, file);
    const outputPath = join(assetsDir, file);
    
    const beforeStats = await stat(inputPath);
    const beforeSize = beforeStats.size;
    totalBefore += beforeSize;
    
    // Compress PNG with quality 85, strip metadata, use adaptive filtering
    await sharp(inputPath)
      .png({ 
        quality: 85,
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true
      })
      .toFile(outputPath + '.tmp');
    
    // Replace original with compressed version
    await sharp(outputPath + '.tmp').toFile(outputPath);
    
    const afterStats = await stat(outputPath);
    const afterSize = afterStats.size;
    totalAfter += afterSize;
    
    const savings = ((beforeSize - afterSize) / beforeSize * 100).toFixed(1);
    console.log(`✓ ${file}`);
    console.log(`  Before: ${(beforeSize / 1024 / 1024).toFixed(2)} MB → After: ${(afterSize / 1024 / 1024).toFixed(2)} MB (${savings}% reduction)`);
    
    // Cleanup temp file
    try {
      await import('fs/promises').then(fs => fs.unlink(outputPath + '.tmp'));
    } catch {}
  }
  
  console.log(`\n📊 Total compression:`);
  console.log(`  Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  After: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Savings: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB (${((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)}%)`);
}

optimizeImages().catch(console.error);
