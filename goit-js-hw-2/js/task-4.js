"use strict";

function findLongestWord(str) {
  str = str.split(" ");
  let longestWord = str[0];
  for (let word of str) {
    if (word.length > longestWord.length) longestWord = word;
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 

console.log(findLongestWord("Google do a roll")); 

console.log(findLongestWord("May the force be with you")); 
