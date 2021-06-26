/*

FUNCTIONS!!

A function is basically a set of code that can be used over and over again. It is mainly used to 
reduce code redundancy. For example. If I am going to be making a lot of soups and curries, I will
create a batch of chicken stock to be used with all of my recipes. Now in this case, chicken stock
is my function. 


SYNTAX

keyword     name of function
function myFunction(){
    (function body)
    logical statements
}

// invocation of function call
myFunction();
*/

function thaiCurry(){
    console.log("This is my Thai Curry example.")
}

thaiCurry();

/*

Parameters: 
Using parameters makes the function more accessible for different inputs.
The parameters are just like variables except that the values of these variables 
are defined by we call the function and are not assigned within the function itself. 

function myFunction(parameter 1, parameter 2, parameter 3, ...){
    //statements using multiple parameters
}

*/

function thaiCurry(ingredient1, ingredient2){
    console.log(`My curry has ${ingredient1} and ${ingredient2} in it.`)
}

thaiCurry('tomato paste', 'meat')
thaiCurry('spices', 'meat')

// Function to add two numbers
                    // parameters
function addition(num1, num2){
    let sum = num1 + num2;
        console.log(`The sum of the numbers is ${sum}`);
    }
// arguments
addition(3,5); // num1 = 3, num2 = 5
addition(2,10);
addition(15,35);

// DEFAULT PARAMETERS
function addition2(num1, num2, num3 = 10){
    return num1+num2+num3
}
console.log(addition2(2, 8, 15))

/*
Return:
The return keyword ends function execution and specifies a value to be returned. Any code after the
return statement will not be executed. 
A return keyword without an expression after it will cause the function to return undefined.

*/

function thaiCurry(ingredient1, ingredient2){
    return `My curry has ${ingredient1} and ${ingredient2} in it`
}

console.log(thaiCurry('spices', 'meat'))

let curry = thaiCurry('spices', 'chicken');
console.log(curry)

let sum = addition (5, 10);
console.log(`The SUM of my numbers is ${sum}`);

/*

Anonymous Functions or Arrow Functions
Arrow functions are a compact way of writing a function.

//function expression
let myFunction = () => {
    //function body
}

myFunction();

*/

// concise body function
let greet = () => 'Hello World'
console.log(greet())

/*
The removal of the return keyword and the curly brackets in the arrow
function works only when the function has one statement in the body. 
Concise body functions use return by default. 
*/


// // Block Body
// let add = (num1, num2) => {
//     console.log("The sum of my number is");
//     return num1+num2;
// }
// console.log(add(4,19));

// let add = (num1, num2) => 'The sum of my numbers is ${num1 +num2}'
// console.log(add(4,19));

/*

Challenge 
write a function that returns mililiters on taking ounces as the input.

Hint: 1 oz = 29.57ml

*/
function convert (ounces){
    let ml = ounces*29.57;
    console.log(`${ounces} is equal to ${ml} mililiters`)
    
}
convert(10);
convert(1);
convert(7);