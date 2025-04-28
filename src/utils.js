// Your code here
// src/utils.js
function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (word.length === 0) {
      return false;
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    
    return lowerCaseWord === reversedWord;
  }
  
  module.exports = { isPalindrome };
  