/*
ARRAYS
 */

// What is an array?
// Has [] brackets
// can hold multipe datatypes
// arrays can list data types in an ordered, numbered way

// let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha"]];
// //  hidden keys:  0         1         2       3     4   5           6
// // console.log(typeof students) // typeof doesn't tell me my variable is an array -> object (Array is built on the back of an object so typeof breaks down to its generic answer)
// // console.log(students instanceof Array); //instanceof tells me my array is an array 
// // console.log(students[2]);
// // console.log(students[1]);
// // console.log(students[6]);

// // let name = students[6];
// // console.log(name);

// // let name = students[6] [1];
// // console.log(`Hello ${name}, you look nice today.`);

// // recall for-of loop
// let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hot Dog"];

// // for (f of food){
// //     console.log(f);
// // }

// // for (f of food){
// //     console.log(f + " is amazing");
// // }

// // // array methods
// // food.push ("Pizza"); // .push adds item to end array
// // console.log(food);
// // food.splice(1,1, "Bananas"); //.splice pushes new item in (first number listed), then it deletes data that many spaces forward of the insertions, and lastly has the inserted item(s).
// // console.log(food);
// // food.splice(2,0, "Sweet Potato Pie"); 
// // console.log(food);
// // food.pop(); // removes the last element of an array
// // console.log(food);

// // food = food.slice(2,4); // the first item is the first element to slice from the array, while the second number is the stop position not to be included)
// // console.log(food);

// //forEach allows us to iterate with loops specifically and we can directly grab both the elements and their index numbers

// // food.forEach((f) => console.log(f));

// // food.forEach((food, index) => {
// //     console.log(food);
// //     console.log(index);
// // })

// food.forEach((food, index) => {
//     console.log(`The ${food} food in our array is at position ${index}`);
// })

// let movies = ["300", "Snow White", "The Phantom Menace", "The Watchmen", "The Sound of Music"];
// movies.push("The Force Awakens");
// console.log(movies);

// movies.splice(3, 1, "The League of Extraordinary Gentlemen");
// console.log(movies);

// movies.forEach(movie => console.log(movie));
// console.log(movies.length); //number of items in this array

// let's do the following with an array:
// we will check if we are working with an array
// flip the values within the array (what was in index 4 is now in 0 (for a 5 entry array))
// using method onl, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse(); //methods have to be called like a function with parentheses
    revArr.forEach(numbers => console.log(numbers));
}

arr.

