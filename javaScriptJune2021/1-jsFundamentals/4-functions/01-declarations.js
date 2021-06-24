/*
FUNCTIONS
*/

/* General ideas: at their broadest level, functions do the following
1) Take some input which the function will handle/process
2)They process the input given to them
3) they usually, but don't always, return some value
4)they can be invoked (used) as many times as we want, cutting down on code repetition
*/

// example 1:

function newFunc(num){
    return num + 1; //return sends back the result of the process
}
console.log(newFunc(7));//wrap the tool in a console.log to show what is happening

console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

// example two
function sentence (firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}
console.log(sentence("Jonathan", "Huer"));
console.log(sentence("Tyler", "Shelton"));
let superImportantSentence = sentence ("Nicky", "Disborough");
console.log(superImportantSentence);

// let's build a function that takes a complex type -- an array in this case, and console.logs each 
// item in the input array

let arr = [1, true, {key:"string"}, [0, false, null], "heya!"];
let arr2 = [5,6,7,8,8,10];
function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);// "side effect" of logging every element in the array --side effect is some alternative action to a simple return
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);