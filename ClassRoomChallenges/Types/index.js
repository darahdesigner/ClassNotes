/* BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/


/* SILVER

Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

// */
// let avengersExceptCap={
//     avTwo: "Iron Man",
//     avThree: "Hulk",
//     avFour: "Thor",
//     avFive: "Black Widow",
//     avSix: "Hawkeye"
// }
// // console.log(avengersExceptCap);

// let captainAmerica = {
//     birthYear: 1918,
//     trueIdentity: "Steve Rogers",
//     hasShield: true,
//     associatedHeroes: avengersExceptCap,
// }
// capArray = Object.values(captainAmerica);
// console.log(capArray);
// console.log(capArray[1].typeof);

// if (capArray[0].typeof){
//     console.log()
// }

// if (myNameLength > friendNameLength)
// {console.log(`My name is longer than ${friendName}'s name.`)}
// else if (myNameLength < friendNameLength)
// {console.log(`${friendName}'s name is longer than my name.`)}
// else (`My name is the same length as ${friendName}`)
// ;


// const = captainAmerica[0]typeof
// if (captainAmerica[0].typeof){
//     console.log(`Captain America's Birth Year type is number`)
// }else (console.log("What Are You?"));


// // let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // convert to array, map, and then fromEntries gives back the object
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// alert(doublePrices.meat); // 8






// //SOLUTION BRONZE
let readMe={
    string: "Cheryl",
    number: 9,
    boolean: false,
    object: {random: "car"}
}
console.log(typeof readMe.string)

//SOLUTION SILVER
let value = readMe.boolean
if(typeof value == "string") {
    console.log("This is a string");
} else if(typeof value == "object"){
    console.log("This is an object");
} else if (typeof value == "number"){
    console.log("This is a number");
} else if(typeof value =="boolean"){
    console.log("This is a boolean");
}else console.log("what are you?")