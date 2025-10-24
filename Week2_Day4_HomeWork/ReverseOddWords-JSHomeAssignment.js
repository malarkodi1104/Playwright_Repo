// Assignment Details:     
//*******************/
// Reverse the odd position words from a String with the input:   
// Example Input: 
//**************/
// test = "I am a software tester" 
// Expected Output: 
//****************/
// "I ma a erawtfos tester" 
  
// Assignment Requirements: 
//************************/  
//  Split the input string into an array of words using split(" "). 
//  Traverse through each word using a loop. 
//  Identify the odd indices in the array (e.g., 1, 3, 5, etc.) with index % 2 !== 0. 
//  Reverse the word at odd indices (use array manipulation). 
//  Leave even-indexed words as they are. 
//  Construct and print the final sentence.  
 
// Hints to Solve:     
//   Use split(" ") to split the string into an array of words. 
//   Use split("").reverse().join("") to reverse a word. 
//   Use a loop to traverse through the array and identify odd indices. 
//   Use join(" ") to combine the array back into a single string.

function reverseOddWords(sentence){
    let sentenceArray = sentence.split(" ");
    console.log(`Array of the orginial sentence is...`);
    console.log(sentenceArray);
    for(let index = 0; index < sentenceArray.length; index++){
        if(index%2 !== 0){
            sentenceArray[index] = sentenceArray[index].split("").reverse().join("");
            console.log(sentenceArray);
        }
    }
    const reversedSentence = sentenceArray.join(" ");
    console.log(`\nModified sentence is \n********************\n"${reversedSentence}"`);
}
let sentence = "I am a software tester";
console.log(`Orignial Sentence is ==> '${sentence}'`);
reverseOddWords(sentence);