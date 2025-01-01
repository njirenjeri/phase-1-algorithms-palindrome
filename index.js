function isPalindrome(word) {
  // Write your algorithm here
  // 1. take the word 
  // 2. reverse the word 
  // 3. compare the two words 
  // 4. return true if its the same and false if it's not
  let newWord = word.split('').reverse().join('');
  // console.log(newWord)

  if(newWord.toLowerCase() === word.toLowerCase()){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  --we use the .split('') method with the quote marks to split the word at every character and 
  turns it to an array of characters
  --then we can apply the .reverse() array method to reverse the characters
  --then use the .join() method to join the characters back to a word

  --use the if block to compare the words to see if they are the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
