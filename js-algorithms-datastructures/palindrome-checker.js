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

// array with strings of whatever characters you want
const strArr = [ 
    'eye',
    '_eye',
    'race car',
    'not a palindrome',
    'A man, a plan, a canal. Panama',
    'never odd or even',
    'nope',
    'almostomla',
    'My age is 0, 0 si ega ym.',
    '1 eye for of 1 eye.',
    '0_0 (: /-\\ :) 0-0',
    'five|\\_/|four',
]

// accepts a string as an argument and passes it to the previous palindrome function
function isPalindrome1(strArr) { 
    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (palindrome(strArr[i])) {
            newArr.push(`"${strArr[i]}" is a palindrome.`) // if palindrome is truthy we push the new string to newArr
        } else {
            newArr.push(`"${strArr[i]}" is not a palindrome.`) // otherwise a different message is pushed
        }
    }
    let message = newArr.join('\n'); //create a string from the array joined by newlines
    return message;
}

// finally calls isPalindrome to see results on the provided array
console.log(isPalindrome1(strArr))
