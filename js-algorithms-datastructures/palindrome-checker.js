// checks if the provided string is a alpha numeric palindrome
function palindrome(str) {
    let alphaNumArr = [...str.toLowerCase()].filter(i => i.match(/[a-z0-9]/)); // get a lowercase list of all alpha-numeric characters
    let low = 0;
    let high = alphaNumArr.length -1; 
    while (low < high) { 
      if (alphaNumArr[low] == alphaNumArr[high]) { // compares first and last value in alphaNumArr and keeps iterating if they are the same
        low++;
        high--;
      } else { 
        return false;
      }
    }
    return true; // once low == high we've reached the middle of the string and know it is a palindrome based on the previous comparison
}

// accepts a string as an argument and passes it to the previous palindrome function
function isPalindrome(str) { 
    let message = '';
    if (palindrome(str)) { 
        message += `"${str}" is a palindrome.` // if palindrome is truthy then we return a message saying such
    } else {
        message += `"${str}" is not a palindrome.` // otherwise a different message is returned
    }
    return message;
}

console.log(isPalindrome('eye'))
console.log(isPalindrome('_eye'))
console.log(isPalindrome('race car'))
console.log(isPalindrome('not a palindrome'))
console.log(isPalindrome('A man, a plan, a canal. Panama'))
console.log(isPalindrome('never odd or even'))
console.log(isPalindrome('nope'))
console.log(isPalindrome('almostomla'))
console.log(isPalindrome('My age is 0, 0 si ega ym.'))
console.log(isPalindrome('1 eye for of 1 eye.'))
console.log(isPalindrome('0_0 (: /-\\ :) 0-0'))
console.log(isPalindrome('five|\_/|four'))