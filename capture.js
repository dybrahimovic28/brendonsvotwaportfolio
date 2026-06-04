const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projects = [
  { url: "https://www.thesuncityschool.com/", name: "sun-city-school" },
  { url: "https://www.faithlphotography.com/", name: "faith-l-photography" },
  { url: "https://www.dazilodge.com/", name: "dazi-lodge" },
  { url: "https://complexproperty.net/", name: "complex-property" },
  { url: "https://wamulungwelodge.com/", name: "wamulungwe-lodge" },
  { url: "https://www.kizyalodge.com/", name: "kizya-lodge" },
  { url: "http://bksuccessfulevents.com/", name: "bk-successful-events" }
];

const outDir = path.join(__dirname, 'src', 'assets', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function captureScreenshots() {
  console.log("Starting Chrome browser...");
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  for (const project of projects) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      console.log(`Navigating to ${project.url}...`);
      
      // Navigate and wait for network idle with a 15s timeout
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 15000 });
      
      // Wait an extra 2 seconds for any animations/modals to settle
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const screenshotBuffer = await page.screenshot({ type: 'png' });
      
      console.log(`Optimizing and saving ${project.name}.webp...`);
      const dest = path.join(outDir, `${project.name}.webp`);
      
      await sharp(screenshotBuffer)
        .resize(1200, 750, { fit: 'cover', position: 'top' })
        .webp({ quality: 80 })
        .toFile(dest);
        
      console.log(`Success: ${project.name}.webp saved.`);
      await page.close();
    } catch (e) {
      console.error(`Error capturing ${project.name}:`, e.message);
      // Fallback: create an empty placeholder file so the build doesn't fail
      fs.writeFileSync(path.join(outDir, `${project.name}.webp`), '');
    }
  }
  
  await browser.close();
  console.log("Screenshot generation complete.");
}

captureScreenshots().catch(console.error);
