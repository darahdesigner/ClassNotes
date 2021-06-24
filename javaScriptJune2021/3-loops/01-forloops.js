/*
LOOPS

3-loops
    01-forloops.js
*/

/* Loops offer a quick and easy way to do something repeatedly. 

There are many different kinds of loops but they all do roughly the same thing:
For statement
do while
while
labeled
break
continue
for in
for of
.forEach
.map
*/

// loop structure: a) creation of an indexing variable b) a run condition c) change to the existing variable

// count to 10 from 0 and log the numbers

//    a        b      c
for(let i=0; i<=10; i++){
    console.log(i)
}

// LOOPS CAN RUN INFINITELY
                // if b is undefined like: for(let i=0 ; ; i++) it will add 1 forever
for(let i = 0; i<=5; i++){
console.log(i)
}

// counts to -25 by -3, starting from 2, logs the numbers
for(let i=2; i>=-25; i=i-3){
    console.log(i);
}

// display the letters in a name individually
let personName = "kinkade";

for(let i=0; i<personName.length; i++){
    console.log(personName[i]);
}

// for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i<= stop; i = i + increment){
    console.log(i);
}