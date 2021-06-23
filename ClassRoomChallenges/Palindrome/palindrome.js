//Create a loop that will loop (forEach) through an array of words that will determine if a word is 
//spelled the same forward as it does backward.

// let wordArray = ['radar', 'john', 'racecar', 'trail', 'madam'];

// program to check if the string is palindrome or not

// function checkPalindrome(str) {
//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (wordArray[i] !== wordArray[len - 1 - i]) {
//             return false;
//         }
//     } 
//     return true;
// }


// SOLUTION
let wordArray = ['radar', 'john', 'racecar', 'trail', 'madam'];
wordArray.forEach(word => {
    let rev = word.split("").reverse().join("");
    if (word === rev) {
        console.log(`${word} is a palindrome.`)
    } else {console.log(`${word} is not a palindrome`)

    }
}) 
