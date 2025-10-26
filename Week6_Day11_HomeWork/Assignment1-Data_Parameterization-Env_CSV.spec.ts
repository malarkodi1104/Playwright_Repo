// Assignment Details: 
/********************/
// Create a new lead filling the mandatory fields and select the values from the dropdowns using data 
// parameterization. Implement using different test data formats.

// Assignment Requirements: 
/*************************/

import { chromium, test } from "@playwright/test"; 
import {parse} from "csv-parse/sync";
import fs from "fs";
import dotenv from "dotenv";
let file = process.env.env || `qa` //Environment file...
dotenv.config({path:`Data/${file}.env`})

// storing csv file data in details variable...
let details:any[] = parse(fs.readFileSync("Data/login.csv"),{columns:true, skip_empty_lines:true})

test.describe.serial(`Run in serial mode...`, async()=> { //Execute the tests in sequential mode for the number of test data given in login.json file
for (let data of details){
test(`HomeWorkAssignment1 - Data_Parameterization ${data.TCaseId}`, async()=> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    // 1. Navigate to http://leaftaps.com/opentaps/control/main 
    page.goto(`${process.env.BaseUrl}`);
    console.log(`Environmental Variable URL - ${process.env.BaseUrl}`)
    console.log(`Getting Environmental variable for Username and Password`);
    // 2. Enter the username and password 
    await page.locator(`#username`).fill(`${process.env.LF_Username}`);
    await page.locator(`#password`).fill(`${process.env.LF_Password}`);
    // 3. Click Login 
    await page.locator(`.decorativeSubmit`).click();
    // 4. Click CRM/SFA 
    await page.locator(`text=CRM/SFA`).click();
    // 5. Click Leads 
    await page.locator(`//a[text()='Leads']`).click();
    // 6. Click Create Leads 
    await page.locator(`//a[text()='Create Lead']`).click();
    // 7. Fill all the mandatory fields such as Company name, First name and Last name 
    await page.locator(`input[id='createLeadForm_companyName']`).fill(data.companyName);
    await page.locator(`//td/input[@name='firstName']`).fill(data.firstName);
    await page.locator(`//td/input[@name='lastName']`).fill(data.lastName);
    // 8. Select Direct Mail from the Source dropdown using label 
    await page.locator(`#createLeadForm_dataSourceId`).selectOption({label: data.sourceMail}); //selecting by Visible text(label)
    // 9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value  
    await page.locator(`#createLeadForm_marketingCampaignId`).selectOption(data.marketingCampaign); //selecting by value='DEMO_MKTG_CAMP' stored in login.json file
    // 10. Get the count and print all the values in the Marketing Campaign dropdown 
    const MarketingCampaignDropdown = page.locator(`#createLeadForm_dataSourceId`);
    const dropDownValue = await MarketingCampaignDropdown.locator('option').allTextContents();
    const count = await MarketingCampaignDropdown.locator('option').count();
    if (count !== 0){
    console.log(`Values in Marketing Campaign dropdown... "${count}"`);
    //console.log(dropDownValue);
    for(let i=1; i<=count; i++)
            {
            const dropDownVal = dropDownValue[i];
            console.log(`${[i]} - ${dropDownValue[i]}`);
            }
    }
    // 11. Select General Services from the Industry dropdown using index  
    await page.locator(`#createLeadForm_industryEnumId`).selectOption(data.industry);
    // 12. Select INR from the Preferred Currency dropdown 
    await page.locator(`#createLeadForm_currencyUomId`).selectOption(data.preferredCurrency);
    // 13. Select India from the Country dropdown 
    await page.locator(`#createLeadForm_generalCountryGeoId`).selectOption(data.country);
    // 14. Select any state from the State dropdown  
    await page.locator(`#createLeadForm_generalStateProvinceGeoId`).selectOption(data.state);
    // 15. Get the count of all states and print the values in the console 
    const stateDropdown = page.locator(`#createLeadForm_generalStateProvinceGeoId`)
    const stateCount = await stateDropdown.locator(`option`).count();
    const stateValues = await stateDropdown.locator(`option`).allTextContents();
    if(stateCount !==0){
        console.log(`\nNo. of States in the dropdown => ${stateCount}`);
        for(let i=1; i<=stateCount; i++){
            const dropDownVal = stateValues[i];
            console.log(`${[i]} - ${[dropDownVal]}`);
        }
    }
    // 16. Click Create Lead
    await page.locator(`input[class='smallSubmit']`).click();
    
    console.log(`<-------------Lead creation Successful---------->`);
    await page.waitForLoadState(`domcontentloaded`);
})
}
})