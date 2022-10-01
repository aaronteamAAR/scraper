const puppeteer = require('puppeteer')


(async ()  => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()

    await page.goto('https://www.amazon.com/s?k=hp&i=computers-intl-ship&page=400&crid=AA7MXECJ6YJ3&qid=1664582144&sprefix=%2Ccomputers-intl-ship%2C633&ref=sr_pg_399', {
        waitUntil: 'load'
    })
        
    const is_disabled = await page.$('.a-last') !== null


    console.log(is_disabled)
    await browser.close()
})()