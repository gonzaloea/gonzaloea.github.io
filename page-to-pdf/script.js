const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PAGE_URL = process.argv[2];
const PDF_PATH = process.argv[3];
const A4_HEIGHT = 842;
const A4_WIDTH = 595;

(async () => {
  console.log("Started the creation of the pdf '"+PDF_PATH+"' from the url: '"+PAGE_URL+"'.")
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage();
  await page.goto(PAGE_URL, {
    waitUntil: ["domcontentloaded", 'networkidle0']
  });
  
  const pdfBuffer = await page.pdf({
      printBackground: true,
      height: A4_HEIGHT,
      width: A4_WIDTH,
      scale: 1
  });

  browser.close();

  fs.writeFileSync(path.join(__dirname, PDF_PATH), pdfBuffer, { flag: 'w'});
  console.log("Conversion done!");
})();
