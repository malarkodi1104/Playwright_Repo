// Assignment Details:   
//********************/   
// Change the characters at odd indices of a given string to uppercase. 
// Example Input: 
//**************/
// test = "changeme" 
// Expected Output: 
//****************/
// cHaNgEmE 

const { workerData } = require("worker_threads");

     
// Requirements:   
  
//   Convert the given string to a character array (use split("")). 
//   Implement a loop to iterate through each character of the string. 
//   Identify odd indices within the loop (use index % 2 !== 0). 
//   Inside the loop, change the character to uppercase only if the index is odd (use toUpperCase()). 
//   Construct and print the final string with the modified characters. Hints to solve:   
 
// Hints: 
// 1. Use the split("") method to convert a string to an array of characters. 
// 2. Use toUpperCase() to change characters to uppercase. 
// 3. Use a conditional statement to check for odd indices (index % 2 !== 0). 
// 4. Use join("") to convert the array back to a string. 

function changeOddIndexToUpperCase(word){
    const wordArray = word.split("");
    console.log(`Array of original work is...`);
    console.log(wordArray);
    for (let index = 0; index < wordArray.length; index++) {
        const element = word[index];
        console.log(`Array[${index}] of word '${word}' is `, element);
        //console.log(`Array of word ${word} are \n`,wordArray[0], "\n"+wordArray[1], "\n"+wordArray[2], "\n"+wordArray[3], "\n"+wordArray[4], "\n"+wordArray[5], "\n"+wordArray[6], "\n"+wordArray[7]);
    }
    for (let i = 0; i<wordArray.length; i++){
        if(i%2 !== 0){
            wordArray[i] = wordArray[i].toUpperCase();
            console.log(`Letter changed to uppercase in the word '${word}' and index-'${i}' is "${wordArray}"`);
        }
    }   
    let changeWord = wordArray.join("");
    console.log(`\nModified word of "${word}" is "${changeWord}"`);
}
let word = "changeme";
console.log(`Original word is ==> ${word} \n`);
changeOddIndexToUpperCase(word);