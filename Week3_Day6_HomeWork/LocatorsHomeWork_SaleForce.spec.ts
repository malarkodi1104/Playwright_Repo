//Assignment: 1 Create Lead 

import test, {chromium, expect } from "@playwright/test";
import { create } from "domain";

test(`Assignment:1 Create Lead`, async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    // 1. Login to https://login.salesforce.com 
    page.goto(`https://login.salesforce.com`);
    await page.getByLabel(`USERNAME`).fill(`malarkodi1104831@agentforce.com`);
    await page.getByLabel(`Password`).fill(`Welcome@123`);
    await page.locator(`//input[@id='Login']`).click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(15000);
    // 2. Click on toggle menu button from the left corner 
    await page.locator(`button[title="App Launcher"]`).click();
    // 3. Click view All and click Sales from App Launcher 
    await page.locator(`//button[text()='View All']`).click();
    // 4. Click on Leads tab  
    await page.locator(`//p[@class='slds-truncate'][text()='Leads']`).click();
    // 5. Click on New button 
    await page.locator(`div[title="New"]`).click();
    // 6. Select Salutation dropdown 
    await page.getByRole("combobox", {name:"Salutation"}).click();
    await page.locator(`//span[text()='Ms.']`).click();
    // 7. Enter the Last Name 
    await page.getByPlaceholder(`Last Name`, {exact:true}).fill(`R`);
    //await page.locator(`//input[@name='lastName']`).fill(`R`);
    // 8. Enter the Company Name  
    await page.getByRole("textbox", {name: "Company"}).fill("TestLeaf");
    // 9. Click Save and Verify Leads name created
    //await page.getByRole("button",{name:`Save`}).click();
    await page.locator(`button[name='SaveEdit']`).click();
    //verification
    const tostMessage = await page.locator(`#toastMessage slds-text-heading--small forceActionsText`).innerText();
    console.log(`Tost message ---> '${tostMessage}'`);
    // const cleanText = actualText?.replace(/[$,\.]/g, ""); // removes $, commas, and .
    const removeLeadText = tostMessage?.replace(/Lead "/g,"");
    const createdLeadName = removeLeadText?.replace(/" was created./g, "");
    console.log(`Created Lead name is : ${createdLeadName.toUpperCase()}`);
    expect(tostMessage).toContain(`Case "${createdLeadName}" was created.`);
    console.log(`Assertion Successfull...`);
})