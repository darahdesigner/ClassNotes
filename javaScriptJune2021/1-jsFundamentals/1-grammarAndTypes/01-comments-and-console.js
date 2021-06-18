/*
COMMENTS

1-grammarAndTypes
    01-comments-and-console.js
    */

//value of a comment:
// communicates to anyone reading our code

//types of comments:
//1) single-line comment
/*
2) multi-line comments
*/

//console.log
//outputs some message to the console
console.log('this is a console.log message!')

console.log('you can separate parts of a console message with commas,','just like this!')

console.log(13,15,17,18);

// console.log and debugging
// we can debug with console.log messsages in 2 big ways:
// first we can check the status of some javascript 'thing'
// secondly, we can check a process we have built with repeated console.log messages

//example 1: 
var sampleName = 'Tyler';
console.log(sampleName);

// TIP highlight specific lines and hit ctrl alt n and run just those lines!

// example 2:
var sampleNum = 1
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);