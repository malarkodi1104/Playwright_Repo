/**
 * Assignment Details:  
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type. 
 
Assignment Requirements:  
1. Create a function named that takes a number as a parameter. 
2. Declare and initialize the variable. 
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, 
and to handle the case when the number is zero. 
4. Return the corresponding string value for each case. 
5. Call the function and print the result. 
 */

function numberType(num) {
    console.log("Value of the variable is "+num);    
    if (num > 0){
        return "Number is greater than 0 and is POSITIVE";
    }else if (num < 0) {
        return "Number is less than 0 and is NEGATIVE";
    }else if(num === 0){
        return "Number is equal to 0 and is NEUTRAL";
    }
}
console.log("Number type is "+numberType(-56));