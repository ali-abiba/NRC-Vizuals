const puppeteer = require('puppeteer');
const request_client = require('request-promise-native');
let result = [];

await puppeteer.launch().then(async (browser) => {
    const page = await browser.newPage();
    await page.goto('https://www.nike.com/us/en/');
    await page.waitFor(500);
    await page.click('#MobileMenuToggle');

    await page.evaluate(query => {
        const elements = [...document.querySelectorAll('button.p0-sm.mobile-menu-link')];
        const element = elements.find(e => e.innerText.includes(query));

        element && element.click();
    }, 'Join/Log In To Nike Member Profile');
    await page.waitForSelector('input[type=email]');

    await page.focus('input[type=email]');
    await page.keyboard.type('ali.abiba298@gmail.com');

    await page.focus('input[type=password]');
    await page.keyboard.type('Haidar65*');

    await page.setRequestInterception(true);
    await page.click('.loginSubmit');

    page.on('request', request => {
        request_client({
            uri: request.url(),
            resolveWithFullResponse: true
        }).then(response => {
            const request_url = request.url();
            const request_headers = request.headers();
            const request_post_data = request.postData();
            const response_headers = response.headers;
            const response_size = response_headers['content-length'];
            const response_body = response.body;

            result.push({
                request_url,
                request_headers,
                response_body,
            });

            request.continue();
        }).catch(err => {
            console.log(err);
            request.abort();
        })
    });

    await browser.close();
});
console.log(result);
