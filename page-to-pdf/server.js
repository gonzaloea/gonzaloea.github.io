const express = require('express');
const puppeteer = require('puppeteer');

const PORT = 3000;

let browser;
puppeteer.launch({
    headless: true
}).then(b => browser = b);

const server = express();
server  
  .get('/convert', async (req, res) => {
    try {        
        const page = await browser.newPage();
        await page.goto(req.query.url,{
          waitUntil: ["domcontentloaded", 'networkidle0']
        });
        
        const pdfBuffer = await page.pdf({
            printBackground: true,
            height: 842,
            width: 595,
            scale: 1,
            margin: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px"
          },
        });

        res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-disposition': 'attachment;filename=CV_Gonzalo_Alvarez.pdf',
        'Content-Length': pdfBuffer.length
        });
        console.log(pdfBuffer.length)
        res.end(Buffer.from(pdfBuffer, 'binary'));
        
    } catch (err) {
        console.error(err)
    }
  
  });

  server.listen(PORT, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${PORT}`);
  });


  module.exports = server