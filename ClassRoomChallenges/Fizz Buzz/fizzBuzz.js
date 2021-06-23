// let age = 2;
// if (age >= 25){
//     console.log('yay! You can rent a car!');
// } else if (age >= 21){
//     console.log('yay you can drink');
// } else if (age >=18){
//     console.log('yay you can vote!');
// } else {
//     console.log('sorry you are too young to do anything fun');
// }

/*
Challenge: Create a variable named FB that takes numbers
Write an ELSE/IF conditional that: 
prints out "fizz" if the number is divisible by 3
prints out buzz if the number is divisible by 5
prints out fizz buzz if the number is divisible by both 3 and 5

convert this to a switch statement and then a ternary
*/

// let FB = 50;

// if(FB%15 === 0){
//     console.log("Fizz Buzz");
// } else if(FB%3 === 0);{
//     console.log("Fizz"); 
// } else if(FB%5 === 0);{
//     console.log("Buzz");
// } else{
// console.log("Number is not divisible by 3 or 5");
// }


// SOLUTION

// let FB = 22;
// if(FB % 3 === 0 && FB % 5 === 0){
//     console.log("Fizz Buzz");
// } else if(FB % 3 === 0){
//     console.log("Fizz")
// } else if(FB % 5 === 0){
//     console.log("Buzz")
// } else if (FB % 5 != 0 && FB % 3 != 0){
//     console.log("This number is not divisible by 3 nor 5")
// }


// SWITCH
// let FB = 31;
// switch(true){
//     case(FB % 3 === 0 && FB % 5 ===0):
//     console.log("Fizz Buzz");
//     break;
//     case(FB % 3 === 0):
//     console.log("Fizz");
//     break;
//     case(FB % 5 === 0):
//     console.log("Buzz");
//     break;
//     case (FB % 5 != 0 && FB % 3 != 0):
//         console.log("Number is not divisible by 3 nor 5.");
//         break;
// }


//TERNARY

let FB = 31;

(FB % 3 === 0 && FB % 5 === 0) ? console.log("Fizz Buzz") : (FB % 5 === 0) ? console.log("Buzz") : (FB % 3 === 0) ? console.log ("Fizz") : console.log(FB)