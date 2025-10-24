// To determine whether two given strings have the same characters, regardless of their order, and identify if 
// they are anagrams of each other.

const { Console } = require("console");

function anagrams(word1, word2) {
    if(word1.length === word2.length){
        console.log("Word1 length = "+word1.length+" & Word2 length = "+word2.length);
        let Word1Array = word1.split("");
        console.log("\nArry of Split words...")
        console.log(Word1Array[0], Word1Array[1], Word1Array[2], Word1Array[3]);

        let Word2Array = word2.split("");
        console.log(Word2Array[0], Word2Array[1], Word2Array[2], Word2Array[3]);

        console.log("\nSorting of word1: "+Word1Array.sort());
        console.log("Sorting of Word2: "+Word2Array.sort());

        let JointWord1 = Word1Array.join("");
        let JointWord2 = Word2Array.join("");
        console.log("\nJoined word1 is "+JointWord1);
        console.log("Joined word2 is "+JointWord2);
        if(JointWord1 === JointWord2){
            console.log("The words "+word1.toUpperCase()+" and "+word2.toUpperCase()+" are Anagram...");
        }else{
            console.log("The word "+word1.toUpperCase()+" and "+word2.toUpperCase()+" are NOT Anagram...");
        }
        
    }else{
        console.log("Lengths mismatch, therefore the strings are not an Anagram");
    }
}

let word1 = "post";
let word2 = "stop";
console.log("First word: "+word1);
console.log("Second word: "+word2);
anagrams(word1, word2);