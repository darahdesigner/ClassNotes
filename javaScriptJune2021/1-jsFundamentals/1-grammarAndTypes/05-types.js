/*
TYPES
1-grammarAndTypes
    05-types.js
*/

// Boolean
var on = true;
console.log(on);

let off = false;
console.log(false);

// boolean can represent: true/false, yes/no, on/off, 0/1

// Undefined
/*
Undefine4d usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null

/*
Null means a variable has been declared has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way -- null values 
are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).
Undefnied values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!)
*/

// Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999; //15 digits
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

// Also works the same with negative values -(15 digits) but rounds -(16 digits)

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
// String is any value within quotes. JS spits out value within the quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log (stringOne, stringTwo);

//string concetenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);

let third = 1050 + '100'
console.log(third);

console.log(typeof third);

// Interpolation
// lets you use strings with dynamic content (they require backticks)

// Example 1:
// let age = 32;
// let string = `my age is: ${age}`
// console.log(string);

// Try it with text!
let age = 'this is a name, not an age: Lindsey';
let string = `my age is: ${age}`
console.log(string);

// Objects
/*
What is an object?

An object is a container that stores property names and their values
(it can hold multiple data types)

Denoted by {}
Have keys and values -- color (key): 'blue' (value), separated with a colon
each key-value pair is separated with a comma
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);

// Arrays
/* Arrays stores multiple values in an ordered way. They, too, hold multiple data types.

Denoted by []
Has values of 'blue', 'green', 'yellow'), separated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush'];
// array indexing           0                       1                   2           3               4           (etc.)
//console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[05]);
console.log(typeof stepsToBrushTeeth);