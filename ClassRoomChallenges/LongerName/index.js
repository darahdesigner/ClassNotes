/* BRONZE

Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check 
how long the names are. Console log how many letters are in each name.

*/

/* SILVER

Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

*/

var myName = "Darah";
var friendName ="Michelle";

// console.log(myName.length);
// console.log(friendName.length);


// var myNameLength = 5;
// var friendNameLength = 8;



// if (myNameLength >= friendNameLength)
// {console.log(`My name is longer than ${friendName}'s name.`)}
// else {console.log(`${friendName}'s name is longer than my name.`)};

// ROBERT'S SOLUTION

const myNameLength = myName.length
const friendNameLength = friendName.length;

/* GOLD

In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that 
has not been mentioned so far. See if you can add that to your conditional!

*/

if (myNameLength > friendNameLength)
{console.log(`My name is longer than ${friendName}'s name.`)}
else if (myNameLength < friendNameLength)
{console.log(`${friendName}'s name is longer than my name.`)}
else (`My name is the same length as ${friendName}`)
;
if (myNameLength > friendNameLength)
{console.log(`My name is longer than ${friendName}'s name by ${(myNameLength - friendNameLength)} letters.`)}
else if (myNameLength < friendNameLength)
{console.log(`My name is shorter than ${friendName}'s name by ${(friendNameLength - myNameLength)} letters.`)}
else ("There is 0 difference in the lengths of our names.");