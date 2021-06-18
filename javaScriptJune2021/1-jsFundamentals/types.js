let phrase = "hello"
// let myName = "Darah"
// console.log(phrase + " " + myName);

// console.log(`${phrase} ${myName}`)

// Booleans
let on = true;
let off = false;

// Null - intentionally empty variable

let empty = null;


// Undefined - starts empty but we intend to fill it
let undef = undefined;
// let undef;
// ^^ These two are the same as each other

// Numbers
let degrees = 90;
let precise = 999999999999999;
let rounded = 9999999999999999;
console.log(precise, rounded);

//strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backticks`;
console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100"
let third = 1050 + "100"
console.log(first, second, third);

// objects
let frodo={
    race: "hobbit",
    rings: 1,
    cloak: true
}

console.log(frodo);

//arrays
let breakfast = ["put pan on stove", "turn on stove", "crack egg into pan", "wait 2 minutes", "flip egg", "serve egg"]
console.log(breakfast);
console.log(breakfast[0]);

let lunch = ["sandwich", 1, true]
console.log(typeof lunch);// RETURNS OBJECT

/*
DataType literals are fixed values that we as developers insert into the code, not data that is coming from a third party source.
*/
let firstName = "Donovan";
console.log(firstName.length);

console.log (firstName.toUpperCase());

let home = "My home is in greenwood";
console.log(home.includes("greenwood")); //STILL CASE SENSITIVE
// USE toUpperCase or toLowerCase to help make includes catch all relevant data

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));// Returns array separating by the space
console.log(sent.split("e")); // [This s, nt, nc, will b, split into individual parts]