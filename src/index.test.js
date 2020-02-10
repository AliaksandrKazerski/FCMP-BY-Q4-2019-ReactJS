const puppeteer = require('puppeteer')

jest.setTimeout(30000);

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

describe('on page load', () => {
  test('h1 FIND YOUR MOVIE loads correctly', async() => {
    let browser = await puppeteer.launch({})
    let page = await browser.newPage()
    
    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    })
    await page.goto('http://localhost:9000/', {waitUntil: 'load', timeout: 0});
    const html = await page.$eval('.search-panel__title', e => e.innerHTML);
    expect(html).toBe('FIND YOUR MOVIE');
    browser.close();
  }, 16000)
})