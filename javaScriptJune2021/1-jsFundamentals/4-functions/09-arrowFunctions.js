/*
ARROW FUNCTIONS
*/

// normal function declaration
function coffee(){
    return "coffee is good";
}

// normal function expression - an unnamed function
let tea = function(){//anonymous function - uses the name of the variable
return "tea is healthy";
}
console.log(coffee());
console.log(tea ()); //variable use for calling upon the function expression here!

//arrow functions are *always* anonymous
//arrow function expression
let hotChocolate = () => {
    return "Hot chocolate is king.";
}
console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

// console.log(animals()); //undefined because we didn't complete the expression with numbers

console.log(animals(3,2));
console.log(animals(0,0)); //ARROW FUNCTIONS DO NOT GET HOISTED - CAN'T USE IT BEFORE IT IS FIRST USED!

//concise vs. block body

let apples = x => `There are ${x} apples`; //with or without parentheses around x for "let apples = x" for a single variable
console.log(apples(10));

//block body
let bananas = (x) => {
    return `There are ${x} banana(s)`;
}
console.log(bananas(5));

// return must be explicitly written in a block-body arrow function

let func = () => 'hi!';
console.log(func());

// let secondFunc = ()
// =>      // this doesn't work because it needs to directly follow parentheses for arrow functions
// "hi";
// console.log(secondFunc());