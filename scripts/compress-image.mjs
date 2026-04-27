import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-%20construction%20boulodrome-equipement%20public-salon%20de%20provence%20%281%29-AVZREqPQrspUbTUqmdTVRTMEQ66AlN.jpg';
const outputPath = path.join(process.cwd(), 'public/images/projects/4-equipements/salon-de-provence/salon_1.jpg');

async function downloadAndCompress() {
  console.log('Downloading image...');
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  console.log(`Original size: ${(buffer.length / 1024).toFixed(2)} KB`);
  
  // Compress the image with sharp
  const compressedBuffer = await sharp(buffer)
    .jpeg({ quality: 80, progressive: true })
    .resize({ width: 2000, withoutEnlargement: true }) // Limit max width to 2000px
    .toBuffer();
  
  console.log(`Compressed size: ${(compressedBuffer.length / 1024).toFixed(2)} KB`);
  console.log(`Compression ratio: ${((1 - compressedBuffer.length / buffer.length) * 100).toFixed(1)}%`);
  
  // Save the compressed image
  fs.writeFileSync(outputPath, compressedBuffer);
  console.log(`Saved to: ${outputPath}`);
}

downloadAndCompress().catch(console.error);
