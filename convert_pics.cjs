const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const picsDir = path.join(__dirname, 'pics');
const outDir = path.join(__dirname, 'public', 'projects');

const mappings = [
  { source: "suncity pic.jpg", target: "sun-city-school.webp" },
  { source: "complex property pic.jpg", target: "complex-property.webp" },
  { source: "dazi lodge pic.jpg", target: "dazi-lodge.webp" },
  { source: "kizya lodge pic.webp", target: "kizya-lodge.webp" }
];

async function convertImages() {
  console.log("Starting image conversion...");
  
  for (const map of mappings) {
    const sourcePath = path.join(picsDir, map.source);
    const destPath = path.join(outDir, map.target);
    
    if (fs.existsSync(sourcePath)) {
      try {
        console.log(`Optimizing ${map.source} -> ${map.target}...`);
        await sharp(sourcePath)
          .resize(1200, 750, { fit: 'cover', position: 'top' }) // Consistent dimensions & aspect ratio
          .webp({ quality: 80 }) // Optimized WebP format
          .toFile(destPath);
        console.log(`Success: ${map.target}`);
      } catch (err) {
        console.error(`Error processing ${map.source}:`, err.message);
      }
    } else {
      console.error(`Source file not found: ${sourcePath}`);
    }
  }
  console.log("Image processing complete.");
}

convertImages().catch(console.error);
