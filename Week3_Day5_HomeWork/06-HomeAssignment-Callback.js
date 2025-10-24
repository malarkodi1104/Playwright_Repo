//HomeWork Assignment:
//*******************/
// Learn how to use callbacks to handle asynchronous tasks in JavaScript. 
// Assignment Steps:  
//*****************/
// 1. Declare a global variable browser and assign it the value "Chrome".  
// o Example: let browser = "Chrome";  
// 2. Create a function named checkBrowserVersion that accepts a callback function as an 
// argument:  
// o Use setTimeout to simulate a delay (like waiting for data from a server).  
// o After the delay (2 seconds), invoke the callback function and pass the browser value to it.  
// 3. Write a callback function that logs the browser version to the console when invoked.  
// 4. Call checkBrowserVersion and pass the callback function to it. o The callback should print the 
// browser version after the 2-second delay.  
  
// Expected Outcome:  
//*****************/
//    After running the code, you should see the following message printed after 2 seconds:  
// Browser version using callback: Chrome  
// Learners should understand:  
// o  A callback is a function passed into another function to be executed later. o 
//  How asynchronous operations like setTimeout can be handled using callbacks.  

let browser = "chrome";

function checkBrowserVersion() {
    console.log(`Browser version using callback: "${browser}"`);
}
function browserVersion(callback) {
    console.log(`Aysnc() message... \n"Waiting for data from a server...."`);
        setTimeout(()=> {
            callback(browser)
        },2000);
}
browserVersion(checkBrowserVersion);