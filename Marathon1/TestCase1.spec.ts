import test, { chromium, expect } from "@playwright/test";
import { getRandomValues } from "crypto";

test(`Testcase for Salesforce-Marketing-Create Lead`, async() => {
    // 1. Step: Launch the browser (Chrome / Edge / Firefox / Safari). 
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    // Expected Result: User should see the respective browser getting launched. 

    // 2. Step: Load the specified URL (https://login.salesforce.com/). 
    await page.goto(`https://login.salesforce.com/`);
    // Expected Result: The Salesforce application’s login window should appear.

    // 3. Step: Enter the Username, Password and click on the Login button.
    await page.getByLabel(`USERNAME`).fill(`malar.kumar339@agentforce.com`);
    await (page.getByLabel(`Password`)).fill(`Sathyasai@123`);
    await page.locator(`//input[@id='Login']`).click();
    // Expected Result: The user should be logged into Salesforce CRM 

    // 4. Step: Click on the App Launcher toggle button. 
    //await page.waitForTimeout(6000);
    await page.waitForLoadState(`domcontentloaded`); 
    //await page.locator(`//button[@class='slds-button slds-context-bar__button slds-icon-waffle_container slds-show']`).isVisible();
    await page.locator(`//button[@class='slds-button slds-context-bar__button slds-icon-waffle_container slds-show']`).click();
    //await page.waitForTimeout(3000);
    // Expected Result: A list of apps should appear. 

    // 5. Step: Click on the View All link.  
    await page.locator(`//button[text()='View All']`).click();
    await page.waitForTimeout(2000);
    // Expected Result: The link should direct the user to the App Launcher pop up window. 

    // 6. Step: Type ‘Marketing’ in the search box and click on the Marketing link.
    await page.waitForLoadState(`domcontentloaded`); 
    await page.getByPlaceholder(`Search apps or items...`).fill('Marketing');
    //await page.waitForTimeout(3000);
    await page.locator(`//mark[text()='Marketing']`).click();
    //await page.waitForTimeout(3000);
    // Expected Result: The link should direct the user to Marketing dashboard page.  

    // 7. Step: Navigate to the Leads tab from the Marketing dashboard. 
    await page.locator(`//span[text()='Leads']`).isVisible();
    await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`//span[text()='Leads']`).click();
    //await page.waitForTimeout(3000);
    await page.waitForLoadState(`domcontentloaded`); 
    // Expected Result: User should see a list of existing leads (if any) and options to create a new 
    // lead. 

    // 8. Step: Click on the New button to create a lead. 
    //await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`//a[@class='forceActionLink']/div[text()='New']`).click();
    // Expected Result: A form to input details for the new lead should appear. 

    // 9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid 
    // data. 
    await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`(//button[@class='slds-combobox__input slds-input_faux fix-slds-input_faux slds-combobox__input-value'])[1]`).click();
    await page.locator(`//span[text()='Ms.']`).click();
    await page.getByPlaceholder(`First Name`).fill(`Malarkodi`);
    await page.getByPlaceholder(`Last Name`).fill(`R`);
    await page.locator(`//input[@class='slds-input'][@name='Company']`).fill(`TestLeaf`);
    // Expected Result: All details should be filled in without any errors. 
    
    // 10. Step: Click on the Save button. 
    await page.locator(`//button[text()='Save']`).click();
    // Expected Result: A new lead should be created and user should be redirected to the detailed 

    // view of the newly created lead. A confirmation message should also be displayed and verified. 
    //await expect page.locator(`(//span[@class='toastMessage slds-text-heading--small forceActionsText'][contains(text(),'Lead')]/a)[1]`)
    await page.waitForLoadState(`domcontentloaded`);
    const confirmationMessage = await page.locator(`(//span[@class='toastMessage slds-text-heading--small forceActionsText'])[1]`).innerText();
    console.log(`\nSuccess message for newly created lead ==> ${confirmationMessage}`);  
    expect (confirmationMessage).toContain(`Lead "Ms. Malarkodi R" was created.`); // assertion

    // 11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and 
    // click on the Convert link. 
    //await page.waitForLoadState(`domcontentloaded`);
    await page.waitForTimeout(2000);
    await page.locator(`//button[@class='slds-button slds-button_icon-border-filled fix-slds-button_icon-border-filled slds-button_last']/span[text()='Show more actions']`).click();
    await page.locator(`//span[text()='Convert']`).click();
    // Expected Result: The Convert link should be visible and clickable and a new dialog should 
    // appear asking for details about converting the lead to an opportunity, contact, and an account. 
    // 2 
    
    // 12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name. 
    const leadName = 'TestLeaf-Malarkodi';
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const leadNameConverted = `${leadName}${randomNumber}`;
    await page.locator(`//span[text()='Opportunity']`).click();
    await page.locator(`//span[text()='Opportunity Name']/following::input[@class=' input']`).fill(leadNameConverted);
    // Expected Result: The entered value should appear. 

    // 13. Step: Click on the Convert button. 
    await page.locator(`//button[text()='Convert']`).click();
    // Expected Result: The lead should be successfully converted. A confirmation message ‘Your 
    // lead has been converted’ should be displayed and verified. 
    const leadConverstionVerify = await page.locator(`//h2[text()='Your lead has been converted']`).innerText();
    console.log(`\nSuccess message after Lead converstion ==> ${leadConverstionVerify}`);
    expect (leadConverstionVerify).toContain(`Your lead has been converted`);

    // 14. Step: Click on the Go to Leads button. 
    await page.getByRole("button",{name: `Go to Leads`}).click();
    // Expected Result: It should redirect the user to Leads page. 

    // 15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’. 
    await page.locator(`//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input[@placeholder='Search this list...']`).fill(leadNameConverted);
    await page.locator(`//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input[@placeholder='Search this list...']`).press(`Enter`);
    //await page.waitForLoadState(`domcontentloaded`);

    const pageResult = await page.locator(`//div/h3[text()='Nothing to see here']`).innerText();
    console.log(`\nSearch result converted lead in Lead tab search box ==> ${pageResult}`);
    expect (pageResult).toContain(`Nothing to see here`);
    // Expected Result: The lead should not be displayed as it has been converted to Opportunity and 
    // should display the confirmation message. 

    // 16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted 
    // lead. 
    //await page.waitForLoadState(`domcontentloaded`);
    await page.waitForTimeout(3000);
    await page.locator(`//a[@class='slds-context-bar__label-action dndItem']/span[text()='Opportunities']`).click();
    await page.locator(`//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input[@placeholder='Search this list...']`).fill(leadNameConverted);
    await page.locator(`//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input[@placeholder='Search this list...']`).press(`Enter`);
    // Expected Result: The newly converted opportunity should appear in the list with all the relevant 
    // details correctly populated from the lead. 
    const searchOppur = await page.locator(`(//a[@class='slds-truncate']//span)[1]`).innerText();
    console.log(`\nSearch result converted lead in Opportunity tab search box => ${searchOppur}`);
    expect (searchOppur).toContain(leadNameConverted);

    // 17. Step: Search the opportunity name created and click on the created opportunity name. 
    await page.locator(`//div[text()='New']`).click();
    const opportunity = 'SampleOpportunity';
    //const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const newOpportunity = `${opportunity}${randomNumber}`;
    await page.locator(`//input[@class='slds-input']/preceding::label[text()='Opportunity Name']`).fill(newOpportunity);
    
    await page.locator(`//label[text()='Close Date']/following::div[@class='slds-form-element__control slds-input-has-icon slds-input-has-icon_right']/input[@class='slds-input']`).fill(`10/31/2026`);
    
    //await page.waitForTimeout(2000);
    await page.locator(`(//button/span[text()='--None--'])[1]`).click();
    //await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`//span[text()='Needs Analysis']`).click();
    //await page.waitForTimeout(2000);
    await page.locator(`//button[text()='Save']`).click();
    console.log(`\nSuccessfully saved new opportunity`);
    console.log(`**********************************`);
    
    const verifyNewOpportunity = await page.locator(`//span[@class='toastMessage slds-text-heading--small forceActionsText']`).innerText();
    console.log(`Success message of created Opportunity ==> ${verifyNewOpportunity}`);
    expect (verifyNewOpportunity).toContain(`Opportunity "${newOpportunity}" was created`)
    // Expected Result: The created Opportunity Name should appear and verify the same.
    
    //await page.waitForTimeout(2000);
})