import test, { chromium, expect } from "@playwright/test";
import { log } from "console";
import { loadavg } from "os";

test (`Test Case for Salesforce-Chatter`, async() => {
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
    await page.getByLabel(`Password`).fill(`Sathyasai@123`);
    await page.locator(`//input[@id='Login']`).click();
    console.log(`Login of salesforce application is successful.....`);
    // Expected Result: The user should be logged into Salesforce CRM 

    // 4. Step: Click on the App Launcher toggle button. 
    await page.waitForLoadState(`domcontentloaded`); 
    await page.locator(`//button[@class='slds-button slds-context-bar__button slds-icon-waffle_container slds-show']`).click();
    console.log(`Successfully clicked - App launcher`);
    
    // Expected Result: A list of apps should appear. 

    // 5. Step: Click on the View All link.  
    await page.locator(`//button[text()='View All']`).click();
    await page.waitForTimeout(2000);
    console.log(`Successfully clicked on --> View All link`);
    
    // Expected Result: The link should direct the user to the App Launcher pop up window. 

    // 6. Step: Type ‘Service’ in the search box and click on the Service link. 
    await page.waitForLoadState(`domcontentloaded`); 
    await page.getByPlaceholder(`Search apps or items...`).fill('Service');
    console.log(`Successfully typed -'Services' in the Search box`);
    await page.locator(`(//a[@class='slds-text-heading_small'])[1]`).click();
    console.log(`Clicked --> Services link`);
    // Expected Result: The link should direct the user to Service dashboard page.  

    // 7. Step: Navigate to the Cases tab from the Service dashboard. 
    await page.locator(`//span[text()='Cases']`).click();
    console.log(`Successfully clicked on Cases tab and navigated to the service dashboard`);
    // Expected Result: User should see a list of existing leads (if any) and options to create a new case. 

    // 8. Step: Click on the New button to create a new case. 
    await page.locator(`//div[text()='New']`).click();
    console.log(`Successfully clicked on "New" button to created 'New Case'`);
    // Expected Result: A form to input details for the new case should appear. 

    // 9. Step: Click on the Search Contacts input field in Contact Name 
    await page.getByPlaceholder(`Search Contacts...`).click();
    console.log(`\nClicked on Search Contacts input field...`);
    // Expected Result: A list menu with New Contact link should be displayed. 

    // 10. Step: Click on the New Contact link 
    await page.locator(`//span[text()='New Contact']`).click();
    console.log(`Clicked on New Contact link...`);
    console.log(`Navigated to New Contact form...`);    
    // Expected Result: A form to input details for the new contact should appear. 

    // 11. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data. 
    //Salutation...
    await page.locator(`//label[text()='Salutation']/following-sibling::div//div/div/div/button/span[@class='slds-truncate'][text()='--None--']`).click();
    await page.locator(`//span[text()='Ms.']`).click();
    console.log(`Selected the "Salutation"...`);    

    //First Name...
    const newContact = `Malarkodi`;
    const randomNumber = Math.floor(Math.random() *90000)+10000;
    //const newFristName = `${newContact}${randomNumber}`;
    await page.getByRole("textbox",{name: `First Name`}).fill(newContact);
    console.log(`Entered First name is : ${newContact}`);

    //Last Name...
    const lastName = `Rhathna`;
    const newLastName = `${lastName}${randomNumber}`;
    await page.getByRole("textbox", {name: `Last Name`}).fill(newLastName);
    console.log(`Entered Last name is : ${newLastName}`);
    // Expected Result: All details should be filled in without any errors. 

    // 12. Step: Click on the Save button. 
    await page.locator(`//h2[text()='New Contact']/following::button[@class='slds-button slds-button_brand'][text()='Save']`).click();
    //await page.waitForLoadState(`domcontentloaded`);
    const confirmationMessage = await page.locator(`//span[@class='toastMessage slds-text-heading--small forceActionsText']`).innerText();
    console.log(`\n`);
    console.log(`Success message for newly created contact ==> ${confirmationMessage}`);  
    expect (confirmationMessage).toContain(`Contact "Ms. ${newContact} ${newLastName}" was created.`); // assertion
    console.log(`Successfully verified the New contact creation success message...`);

    //Close the Success Toast message...
    await page.locator(`//button[@class='slds-button slds-button_icon toastClose slds-button_icon-inverse slds-button_icon-bare']`).click();
    console.log(`Success Toast message for new contact is closed...`);    
    // Expected Result: A new contact should be created and a confirmation message ‘Contact was created’ 
    // should also be displayed and verified. 

    // 13. Step: Click Search Accounts input field in Account Name and click on the New Account link 
    //await page.getByRole("combobox", {name: `Account Name`}).click();
    await page.getByPlaceholder(`Search Accounts...`).click();
    await page.getByPlaceholder(`Search Accounts...`).click();
    console.log(`\nClicked on Search Accounts...`);
    await page.locator(`//span[text()='New Account']`).click();
    console.log(`Clicked on New Account link...`);
    console.log(`Navigated to New Account form...`);   
    // Expected Result: A list menu with New Account link should appear and a form to input details for the new 
    // account should display. 

    // 14. Step: Fill in all the mandatory fields (Account Name, Account Number) with a valid data. 
    //Account Name...
    const newFristName = `Malarkodi`;
    const accName = `${newFristName}${randomNumber}`;
    await page.locator(`//label[text()='Account Name']/following-sibling::div/input[@class='slds-input']`).fill(accName);
    console.log(`Entered Account Name is : ${accName}`);

    //Account Number...
    const accNum = 1001223;
//    const randomNumber = Math.floor(Math.random() *90000)+10000; /// comment after checking...
    const newAccNumRandom = `${accNum}${randomNumber}`;
    //await page.getByRole(`textbox`, {name: `AccountNumber`}).fill(newAccNumRandom);
    //await page.locator(`//label[@class='slds-form-element__label slds-no-flex'][text()='Account Number']/following-sibling::div`).click();
    await page.locator(`//label[text()='Account Number']/following-sibling::div/input[@class='slds-input']`).fill(newAccNumRandom);
    console.log(`Entered Account number is : ${newAccNumRandom}`);
    // Expected Result: All details should be filled in without any errors. 

    // 15. Step: Select the Rating dropdown and choose the option ‘Hot’ 
    await page.getByRole("combobox", {name: "Rating"}).click();
    await page.locator(`//span[text()='Hot']`).click();
    console.log(`HOT option is selected in the Rating dropdown...`);
    
    // Expected Result: A list of different options to choose should be displayed. 

    // 16. Step: Click on the Save button. 
    //Click on Save button..
    await page.locator(`//h2[text()='New Account']/following::button[@class='slds-button slds-button_brand'][text()='Save']`).click();
    //await page.waitForLoadState(`domcontentloaded`);
    const confirmMessage = await page.locator(`//span[@class='toastMessage slds-text-heading--small forceActionsText']`).innerText();
    console.log(`\n`);
    console.log(`Success message for New account creation ==> '${confirmMessage}'`);  
    expect (confirmMessage).toContain(`Account "${accName}" was created.`); // assertion
    console.log(`Successfully verified the Account creation success message...`);

    //Close the success toat message...
    await page.locator(`//button[@class='slds-button slds-button_icon toastClose slds-button_icon-inverse slds-button_icon-bare']`).click();
    console.log(`Success Toast message for new account is closed...`);    
    // Expected Result: A new account should be created and a confirmation message should also be displayed 
    // and verified. 

    // 17. Step: Select the Status dropdown icon and choose the value as New.
    await page.getByRole("combobox", {name:'Status'}).click();
    await page.locator(`//span[@class='slds-media__body']/span[text()='New']`).click();
    console.log(`\nClick on Status dropdown...`);
    console.log(`Select NEW status...`);
    // Expected Result: A list of values with New option should appear. 

    // 18. Step: Select the Priority dropdown icon and choose the value as ‘High’. 
    await page.getByRole("combobox", {name:`Priority`}).click();
    await page.locator(`//span[text()='High']`).click();
    console.log(`Click on Priority dropdown...`);
    console.log(`Select HIGH priority...`);
    // Expected Result: A list of values with ‘High’ option should appear. 

    // 19. Step: Select the Case Origin dropdown icon and choose the value as ‘Email’. 
    await page.getByRole("combobox", {name: `Case Origin`}).click();
    await page.locator(`//span[text()='Email']`).click();
    console.log(`Click on Case Origin...`);
    console.log(`Select EMAIL option...`);
    // Expected Result: A list of values with ‘Email’ option should appear. 

    // 20. Step: Fill in the Subject input field as ‘Product Return Request’ and Description input field as ‘Requesting a 
    // return for a defective product’  
    await page.getByRole("textbox", {name: `Subject`}).fill(`Product Return Request`);
    console.log(`Entered "Product Return Request" in the Subject...`);
    // Expected Result: The input fields should be filled with valid data. 

    // 21. Step: Click on the Save button.  
    await page.locator(`//button[text()='Save']`).click();
    const confirmLoctorCaseCreation = await page.locator(`//span[@class='toastMessage slds-text-heading--small forceActionsText']`);
    const confirmMsgCaseCreation = await page.locator(`//span[@class='toastMessage slds-text-heading--small forceActionsText']`).innerText();
    //try using replace method for $,
    const actualText = await confirmLoctorCaseCreation.textContent();
    
// const cleanText = actualText?.replace(/[$,\.]/g, ""); // removes $, commas, and .
    const removeCaseText = actualText?.replace(/Case "/g, "");
    const caseNumber = removeCaseText?.replace(/" was created./g, "");
    expect(confirmMsgCaseCreation).toContain(`Case "${caseNumber}" was created.`);  
    console.log(`\nSuccess message for New Case creation ===> '${confirmMsgCaseCreation}'`);
    console.log(`Validation of toast message --> "${caseNumber}"`);
    console.log(`Verification of success message for new Case is done...`);
    //Close the success toat message...
    await page.locator(`//button[@class='slds-button slds-button_icon toastClose slds-button_icon-inverse slds-button_icon-bare']`).click();
    console.log(`Success Toast message for new Case is closed...`);   
    // Expected Result: A new case should be created and user should be redirected to the detailed view of the 
    // newly created case. A confirmation message should also be displayed and verified. 

    // 22. Step: Edit the Status under Details category and choose the ‘Escalated’ option from the dropdown. 
    //await page.locator(`(//button[@class='slds-button slds-button_neutral'][text()='Edit'])[2]`).click();
    await page.waitForLoadState(`domcontentloaded`); 
    await page.getByRole("button",{name: `Edit Status`}).click();
    await page.getByRole("combobox", {name:`Status`}).click();
    await page.locator(`//span[@class='slds-media__body']/span[text()='Escalated']`).click();
    console.log(`\nClick on Edit button in Details category...`);
    console.log(`Click on Status dropdown...`);
    console.log(`Selected "Escalated" status option...`);        
    // Expected Result: A list of Status options to choose ‘Escalated’ should appear. 

    // 23. Step: Click on the Save button.  
    await page.locator(`//button[text()='Save']`).click();
    console.log(`Click on Save button Details Category changes are saved...`);
    // Expected Result: The Status should be updated under Details category. 

    // 24. Step: Enter a valid data in the Share an Update input field and click on the Share button.  
    await page.waitForLoadState(`domcontentloaded`); 
    await page.locator(`//span[text()='Share an update...']`).dblclick({timeout:3000});
    await page.locator(`//div[@data-placeholder="Share an update..."]/p`).fill(`Changes are updated..`);
    await page.locator(`//span[text()='Share']`).click();
    console.log(`Post is shared successfully...`);    
    // Expected Result: The update should appear under All Updates category. 

    // 25. Step: Click on the dropdown icon and choose the Like on Chatter option.  
    await page.locator(`(//span[text()='Actions for this Feed Item '])[1]`).click();
    await page.locator(`(//span[text()='Like on Chatter'])[1]`).click();
    const likeMessage = await page.locator(`//span[text()='Post was liked.']`).innerText();
    
    console.log(`Click on Dropdown in the Allupdates section...`);
    console.log(`Click on "Like on Chatter" option...`);    
    console.log(`Post like successfully...`);
    
    expect (likeMessage).toContain(`Post was liked.`);
    console.log(`Verification of Post like is successfull...`);
    // Expected Result: A confirmation message ‘Post was liked’ should appear and verify the same. 

    // 26. Step: Navigate to the Chatter tab and verify the post liked by the user. 
    await page.waitForLoadState(`domcontentloaded`); 
    await page.locator(`//span[text()='Chatter']`).click();
    const getCaseNum = await page.locator(`(//span[@class='cuf-entityLinkId forceChatterEntityLink entityLinkHover']//span[@class='uiOutputText'])[1]`).innerText();
    const getCaseName = await page.locator(`(//span[@class='cuf-entityLinkId forceChatterEntityLink entityLinkHover']//span[@class='uiOutputText'])[2]`).innerText();
    console.log(`Top post in Chatter for Case Number: ${getCaseNum}`);
    console.log(`Top post in Chatter for Case Name: ${getCaseName}`);

    const postLike = await page.locator(`//button[@class='slds-button slds-button_stateful vote-button likeIconAnchor slds-post__footer-action like-target']`).innerText();
    expect (postLike).toContain(`Like`);
    console.log(`Verification of Post is liked successfull...`);
    // Expected Result: The liked post should appear under the Post category.

    console.log(`\n****************************************`);
    console.log(`TC executed Successfully......`);  
})