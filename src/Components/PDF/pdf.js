const puppeteer = require('puppeteer')






const createPDF = async () =>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const options = {
        path: 'pdf/web.pdf',
        format: 'A4',
        printBackground: true
    }

await page.goto('https://worldportups.com', {waitUntil: 'networkIdle2'})
await page.pdf(options)

await browser.close()
}

createPDF()
