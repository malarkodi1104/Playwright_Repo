// HomeWork Assignment:
// ********************
// Learn how Promises can simulate tasks like fetching data, where you can use a simple condition (e.g., 
// const data = true) instead of actually fetching data from a server Expected Completion Time: 

const { error } = require("console");

// Assignment Steps:  
// *****************
// Create a function called fetchDataFromDatabase() that returns a Promise.  
// • Inside the function, use setTimeout() to simulate a delay of 3 seconds.  
// • Use a simple condition like const data = true to simulate whether data is available.  
// • If data is true, resolve the Promise with the message "Data fetched successfully!".  
//  If data is false, reject the Promise with the message "Data not found!".  
// Call the function fetchDataFromDatabase() and handle the Promise:  
// o Use .then() to print "Data fetched successfully!" if the 
// Promise is resolved. o  Use .catch() to print "Data not found!" if 
// the Promise is rejected.  
  
// What Happens:  
// *************
// • The message "Fetching data from database..." is printed immediately.   After 3 
// seconds, either:  
// o "Data fetched successfully!" (if data is found) or o "Data not 
// found!" (if data is not found).  
  
// Key Concepts:  
// *************
// • Promise: Simulates asynchronous tasks like fetching data.  
// • .then(): Runs when the task succeeds (data fetched).  
// • .catch(): Runs when the task fails (data not found). 

function fetchDataFromDatabase(){
    console.log(`Timeout delay for 3secs...`);
    const data = true;
    return new Promise((resolve, reject) => { // creating promise using the new and Promise keywords along with the (resolve, reject)
        setTimeout(() =>{
            if (data === true){
                resolve("Data fetched successfully!"); //passing values if the promise is resolved
            }else{
                reject("Data not found!"); //passing values if the promise is rejected
            }
        }, 3000);        //delays for 3 seconds                                            
    });
}
fetchDataFromDatabase()
    .then(result => {   // .then() runs if the Promise resolves (data is found)
        console.log(result); // Prints "Data fetched successfully!"
    })
    .catch(error => {       // .catch() runs if the Promise rejects (data not found)
        console.error(error); // Prints "Data not found!"
    });