import { chromium, webkit, test } from "@playwright/test";

test(`Test launch Chrom browser`, async()=> {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redbus.in");
    console.log(`Page title is :${await page.title()}`);
    console.log(`Page URL is : ${page.url()}`);
})

test( `Test launch safari browser`, async() => {
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    console.log(`Page title is :${await page.title()}`);
    console.log(`Page URL is : ${page.url()}`);
}) 