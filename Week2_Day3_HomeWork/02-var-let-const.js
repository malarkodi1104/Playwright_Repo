// Assignment Details:  
//*********************/
// Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
// differently when printed. 
 
// Assignment Requirements:  
//************************/
// 1. Declare a const name as browserVersion (global) 
// 2. Assign value as Chrome 
// 3. Create a function by name getBrowserVersion 
// 4. Create if condition inside function to check if browser is chrome, then 
// 5. Declare a local variable (browserVersion) and print that variable inside function (outside block) 
// 6. Call that function from the javascript 

const browserVersion = "chrome"; //Global variable
function getBrowserVersion_withVar(){ //function with var
    console.log(`Initial value of Global Variable "browserVersion" is `+browserVersion);
    if (browserVersion === "chrome"){
        //Shadow the global variable with Var
        var browserVersion = "Local Variable with(Var) - V22.34";
        console.log("BrowserVersion declared inside if block using(Var): "+browserVersion);
    }
    console.log("BrowserVersion declared as(Var)in IF block & called Inside Function: "+browserVersion);
}
getBrowserVersion_withVar();
console.log("BrowserVersion declared GLOBALLY called OUTSIDE Function: "+browserVersion);

function getBrowserVersion_withLet(){ //function with let
    console.log(`Initial value of Global Variable "browserVersion" is ${browserVersion}`);
    if (browserVersion === "chrome"){
        //shadow the global variable with LET
        let browserVersion = "Local Variable with(LET) - 111";
        console.log(`\nBrowserVersion declared inside if block using(Let): ${browserVersion}`);
    }
    console.log("BrowserVersion declared as(Let)in IF block & called Inside Function: "+browserVersion);
}
getBrowserVersion_withLet();
console.log("BrowserVersion declared GLOBALLY called OUTSIDE Function: "+browserVersion);