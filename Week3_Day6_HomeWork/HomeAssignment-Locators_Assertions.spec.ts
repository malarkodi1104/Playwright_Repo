// Assignment Details: 
//*******************/
// Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or 
// ID, edits details of the lead (such as name, email, or status), and verifies that the changes have 
// been successfully saved. 
 
// Precondition: 
// - Use a fixture to setup and teardown 

import { chromium, expect, test } from "@playwright/test";
import { log } from "console";
import { generateKey } from "crypto";

const userName = `Demosalesmanager`;
const password = `crmsfa`;
const companyName = `TestLeaf`;
const firstName = `Emma`;
//Assignment: 1 Create a Lead
//***************************/
test(`Test to learn assertion and location - Assignment: 1 Create a Lead `, async() => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1. Navigate to the url http://leaftaps.com/opentaps/control/main 
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    console.log(`Page title is : ${await page.title()}`);
    console.log(`Page url is : ${page.url()}`);
    
    // 2. Enter the username as ‘Demosalesmanager’ --> Using "getByRole" locator
    await (page.getByRole(`textbox`,{name:`USERNAME`})).fill(userName);
    // 3. Enter the password as ‘crmsfa’ --> Using "getByLabel" locator
    await (page.getByLabel(`Password`)).fill(password);
    // 4. Click the Login button --> Using "Relative Xpath" locator
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    // 5. Click CRM/SFA --> Using "getByText" locator
    await page.getByText(`CRM/SFA`).click();
    // 6. Click Leads  --> Using "Relative Xpath" locator
    await page.locator(`//a[text() = 'Leads']`).click();
    // 7. Click Create Lead  --> Using "getByText" locator
    await page.getByText(`Create Lead`).click();
    //await page.locator(`//a[@id='ext-gen624']`).click();
    // 8. Fill the Company Name --> Using "CSS" locator
    
    await page.locator(`#createLeadForm_companyName`).fill(companyName);
    // 9. Fill the First Name --> Using "CSS" locator
    
    await page.locator(`#createLeadForm_firstName`).fill(firstName);
    // 10. Fill the Last Name  --> CSS locator
    const lastName = `Watson`;
    await page.locator(`#createLeadForm_lastName`).fill(lastName);
    // 11. Fill the Salutation 
    const salutation = `Miss`;
    await page.locator(`#createLeadForm_personalTitle`).fill(salutation);
    // 12. Fill the Title 
    const title = `Lead`;
    await page.locator(`#createLeadForm_generalProfTitle`).fill(title);
    // 13. Fill the Annual Revenue 
    const AnnualRevenue = `100000000`;
    await page.locator(`#createLeadForm_annualRevenue`).fill(AnnualRevenue);
    // 14. Fill the Department 
    const department = `HR`;
    await page.locator(`#createLeadForm_departmentName`).fill(department);
    // 15. Fill the Phone number 
    const phoneNumber = `825348432342`
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(phoneNumber);
    await page.mouse.wheel(0, 500); // Scrolldown to the page

    // 16. Click Create Lead button   
    await page.locator(`//input[@class="smallSubmit"]`).click();
    // 17. Verify the company name, first name, last name and the status using auto retrying and non
    // retrying assertions
    const viewCompanyName = page.locator(`#viewLead_companyName_sp`);
    await expect(viewCompanyName).toContainText(companyName);

    const viewFirstName = page.locator(`//span[@id="viewLead_firstName_sp"]`);
    await expect(viewFirstName).toHaveText(firstName);

    //const viewLastName = page.locator(`#viewLead_lastName_sp`);
    await expect(page.locator(`#viewLead_lastName_sp`)).toContainText(lastName);

    await expect(page.locator(`#viewLead_statusId_sp`)).toHaveText(`Assigned`);
    
    await page.waitForTimeout(3000);
})


//Assignment: 2 Edit a Lead 
//*************************/
test(`Test to learn assertion and location - Assignment: 2 Edit a Lead `, async() => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // 1. Navigate to the url http://leaftaps.com/opentaps/control/main 
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    console.log(`Page title is : ${await page.title()}`);
    console.log(`Page url is : ${page.url()}`);
    //2. Enter the username as ‘Demosalesmanager’ 
    await (page.getByRole(`textbox`,{name:`USERNAME`})).fill(userName);
    // 3. Enter the password as ‘crmsfa’ --> Using "getByLabel" locator
    await (page.getByLabel(`Password`)).fill(password);
    // 4. Click the Login button --> Using "Relative Xpath" locator
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    // 5. Click CRM/SFA --> Using "getByText" locator
    await page.getByText(`CRM/SFA`).click();
    // 6. Click Leads  --> Using "Relative Xpath" locator
    await page.locator(`//a[text() = 'Leads']`).click();
    // 7. Click Find Leads 
    await page.locator(`//a[contains(text(),'Find Leads')]`).click();
    // 8. Enter the first name --> Elder to younger sibling Xpath
    //await page.locator(`//label[text()='First name:']/following-sibling::div/input[@class=' x-form-text x-form-field ']`).fill(firstName);
    //await page.locator(`(//label[text()='First name:']/following-sibling::div)[5]`).click();
    await page.getByRole("textbox",{name:`First name:`}).fill(firstName);
    // 9. Click Find Leads button 
    await page.getByRole("button",{name:`Find Leads`}).click();
    // 10. Click the first resulting Lead ID 
    await page.locator(`(//div[@class="x-grid3-cell-inner x-grid3-col-firstName"]/a)[1]`).click();
    // 11. Click Edit 
    await page.locator(`//a[@class='subMenuButton'][text()='Edit']`).click();
    // 12. Edit Company name 
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const editCompName = `${companyName}${randomNumber}`;
    await page.locator(`#updateLeadForm_companyName`).fill(editCompName);
    //console.log(`TestLeaf${randomNumber}`);
    // 13. Edit Annual Revenue 
    const editAnnualRev = `10000${randomNumber}`
    await page.locator(`#updateLeadForm_annualRevenue`).fill(editAnnualRev);
    // 14. Edit Department
    const editDepartment = 'Sales';
    await page.locator(`#updateLeadForm_departmentName`).fill(editDepartment);
    // 15. Enter Description 
    const editDescription = `Description of the lead edited`
    await page.locator(`#updateLeadForm_description`).fill(editDescription);
    // 16. Click Update 
    await page.locator(`//input[@class='smallSubmit'][@value="Update"]`).click();
    // 17. Verify the edited fields using appropriate assertions
    const verifyCompanyName = page.locator(`#viewLead_companyName_sp`); // locator value of "Assigned"
    const pageCompanyName = await verifyCompanyName.innerText();
    console.log(`The Company Name after editing is ==> ${pageCompanyName}`);

    await expect(verifyCompanyName).toContainText(editCompName);
    //await expect(page.locator(`#viewLead_companyName_sp`).innerText()).toContain(editCompName);
    const verifyAnnualRevenue = page.locator(`#viewLead_annualRevenue_sp`);
    const pageAnnualRev = await verifyAnnualRevenue.innerText();
    console.log(`Annual revenue after editing is ==> ${pageAnnualRev}`);
    
    //try using replace method for $,
const actualText = await verifyAnnualRevenue.textContent();
const cleanText = actualText?.replace(/[$,\.]/g, ""); // removes $, commas, and .
//expect(cleanText).toContain("1000031263");
expect(cleanText).toContain(editAnnualRev);
   // await expect(verifyAnnualRevenue).toContainText(editAnnualRev);
   
    //expect(page.locator(`#viewLead_annualRevenue_sp`).innerText()).toContain(editAnnualRev);

    const verifyDepartement = page.locator(`#viewLead_departmentName_sp`);
    const pageEditDepartment = await verifyDepartement.innerText();

    await expect(verifyDepartement).toContainText(editDepartment);
    //expect(page.locator(`#viewLead_departmentName_sp`).innerText()).toContain(editDepartment);

    const verifyDescription = page.locator(`#viewLead_description_sp`);
    const pageEditDescription = await verifyDescription.innerText();

    await expect(verifyDescription).toContainText(editDescription);
    //expect(page.locator(`#viewLead_description_sp`).innerText()).toContain(editDescription);
    
})

//Assignment: 3 Create a new Account 
//**********************************/
test.only(`Test to learn assertion and location - Assignment: 3 Create a new Account `, async() => {
    // Assignment: 3 Create a new Account 
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // 1. Navigate to the url https://login.salesforce.com/ 
    await page.goto(`https://login.salesforce.com/`);
    // 2. Enter username using getByLabel
    await page.getByLabel(`USERNAME`).fill(`malarkodi1104831@agentforce.com`);
    // 3. Enter password using getByLabel 
    await (page.getByLabel(`Password`)).fill(`Welcome@123`);
    // 4. Click Login 
    await page.locator(`//input[@id='Login']`).click();
    // 5. Verify the title and url of the page using appropriate assertions 
    await page.waitForTimeout(15000);
    const pageTitle = await page.title();
    console.log(`Page title is : ${pageTitle}`);  
    expect.soft(pageTitle).toContain(`Lightning Experience | Salesforce`); // assertion
    //await page.waitForTimeout(10000);
    let pageUrl = page.url();
    console.log(`Page url is : ${page.url()}`);
    //expect.soft(pageUrl).toContain(`https://orgfarm-0f4cda0eee-dev-ed.develop.lightning.force.com/one/one.app`); //soft assertion
    //expect.soft(pageUrl).toContain(`https://orgfarm-0f4cda0eee-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`); //soft assertion
    expect.soft(pageUrl).toContain(`https://orgfarm-eb73355797-dev-ed.develop.lightning.force.com/lightning/page/home`);
    // 6. Click App Launcher using the class locator 
    await page.waitForTimeout(5000);
    //await page.locator(`.slds-button slds-context-bar__button slds-icon-waffle_container slds-show`).isVisible();
    await page.locator(`button[title="App Launcher"]`).click();
    await page.waitForTimeout(3000);
    // 7. Click View All using getByText 
    await page.getByText(`View All`, {exact:true}).click();
    // 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.getByPlaceholder(`Search apps or items...`, {exact:true}).fill(`Service`);
    // 9. Click Service using index based XPath 
    await page.locator(`//span/p[@class='slds-truncate'][1]`).click();
    // 10. Click Accounts using attribute based CSS selector 
    await page.getByTitle(`Accounts`).click();
    // 11. Click New using getByRole 
    await page.getByRole("button", {name:'New'}).click();
    // 12. Enter Account name using attribute based CSS selector 
    let accName = "Account_No1";
    await page.locator(`input[name="Name"]`).fill(accName);
    // 13. Click Save button using XPath 
    await page.locator(`//button[@name='SaveEdit']`).click();
    // 14. Verify the toast message displayed
    let tostMessage = page.locator(`#toastMessage slds-text-heading--small forceActionsText`);
    expect(tostMessage).toContainText(`Account "${accName}" was created.`);
})