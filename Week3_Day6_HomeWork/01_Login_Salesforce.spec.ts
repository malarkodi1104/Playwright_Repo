// Assignment Details: 
/********************/
// Your task is to print the title and url of a web page using Playwright.

// Precondition: 
/**************/
// - Launch Chromium in non-headless mode 
// - Create a new browser context. 
// - Open a new page within the browser context. 
// - Load the url https://login.salesforce.com/ 
// - Use your Salesforce credentials that you’ve created 
 
// Requirements: 
/**************/
// - Enter the username. 
// - Enter the password. 
// - Click the Login button. 
// - Wait for 10 seconds  
// - Print the page title and the current url of the page 
// - Close the browser

import test, { chromium } from "@playwright/test";

test (`Test to login to Salesforce application`, async() => {
    const browser = await chromium.launch(); // - Launch Chromium in non-headless mode 
    const context = await browser.newContext(); // - Create a new browser context. 
    const page = await context.newPage();   // - Open a new page within the browser context. 
    
    await page.goto(`https://login.salesforce.com/`);   // - Load the url https://login.salesforce.com/

    console.log(`Page Title is : ${await page.title()}`);   
    console.log(`Page ULR => ${page.url()}`);
    // - Enter the username. 
    await page.getByRole("textbox",{name:`username`}).fill(`malarkodi1104831@agentforce.com`);
    // - Enter the password. 
    await page.getByRole("textbox",{name:`password`}).fill(`Welcome@123`);
    // - Click the Login button. 
    await page.locator(`//input[@id='Login']`).click();
    // - Wait for 10 seconds  
    await page.waitForTimeout(10000);
    // - Print the page title and the current url of the page 
    console.log(`Page Title after login ==> ${await page.title()}`);
    console.log(`Page ULR after login => ${page.url()}`);

    // - Close the browser
    page.close();
})