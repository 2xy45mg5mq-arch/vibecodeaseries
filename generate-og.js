const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const out = process.argv[2] || 'og-vibecode.png';
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  const url = 'file://' + path.resolve(__dirname, 'og-template.html');
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: path.resolve(__dirname, out), type: 'png', omitBackground: false, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();
  console.log('wrote', out);
})();
