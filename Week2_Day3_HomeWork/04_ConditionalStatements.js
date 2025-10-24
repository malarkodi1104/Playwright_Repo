//Day2-Assignment:
//***************/
// Assignment Details:  
//********************/
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
// `runTests` with `switch` for test type messages. 

// Assignment Requirements:  
//************************/
// Create two functions : launchBrowser, runTests where, 
//     a) launchBrowser need to take input as browserName (string) and do not return any 
//         - use if-else (chrome or otherwise) 
//         - Print the value 
//     b) runTests need to take input as testType (string) and do not return any  
//         - use switch case (smoke, sanity, regression, default (smoke)) 
//         - Print the values 
// Call that function from the javascript 
function launchBrowser(browserName){
    if (browserName == "chrome"){
        const name = browserName.toUpperCase();
        console.log("Launch the "+name+" browser");
    }else {
        const name = browserName.toUpperCase();
        console.log('Other browser '+name+" Not supported");
    }
}
console.log("If-Else...");
console.log("**********")
let browser = "Firefox";
console.log("Browser name is "+browser);
launchBrowser(browser);


function runTests(testType){
    const testing = testType.toLowerCase();
    switch (testing) {
        case 'smoke':
            console.log("Running Smoke test...");            
            break;
        case 'sanity':
            console.log("Running Sanity test...");
            break;
        case 'regression':
            console.log("Running Regression test...");
            break;
        default:
            console.log("TestType provided is "+tType);
            break;
    }
}
console.log("\nSwitch case...")
console.log("**************")
let tType = "sanity"
console.log("TestType is "+tType);
runTests(tType);