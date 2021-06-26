/*
FOR OF LOOPS
 - For Of Loops parse through an iterable list of numbers - 
 so that makes them great for working with arrays
 -Arrays contain what are known as iterable properties
 Each property or value in an arraay, contains its own index.

              value
 let arr = ["chicken", "turkey", "duck",]
                0          1        2
                index
*/
/* BRONZE

    - Using a for of loop, console.log the name of each pie from the 
    pies array.

*/

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']

for (pie of pies){
    console.log(pie);
}

/* SILVER
    - Have the conditional check if EACH pie from the pies array is of the type 'apple'.
    - If it is of type apple console log ____ pie is of type apple otherwise
     console log  _____ pie is not of type apple

    - Use google to search for an array method that checks if an array includes a certain value

*/

for (pie of pies){
    if(pie.includes("apple")){
        console.log(`${pie} is type apple`)
    } else console.log(`${pie} is not of type apple`)
}

/* GOLD

 - Nest a conditonal inside of the for of loop that checks if a 
    single pie from the pies array is of the type 'fruit pie' - ie. 
    apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. 
    Then, using string interpolation, console.log either 
    'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
 
*/

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']

for (pie of pies){
    if(pie.includes("apple")){
        console.log(`${pie} is a fruit pie`)
    }else if(pie.includes("blueberry")){
        console.log(`${pie} is a fruit pie`)
    }else if (pie.includes("peach")){
        console.log(`${pie} is a fruit pie`)
    }else if (pie.includes("cherry")){
        console.log(`${pie} is a fruit pie`)
    }
     else (console.log(`${pie} is not a fruit pie`))
}

// alternate:
// if(pie.includes("apple") || pie.includes("blueberry") ||pie.includes ("peach") || pie.includes("cherry"))
let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']

for(pie of pies){
if(pie.includes("apple") || pie.includes("blueberry") ||pie.includes ("peach") || pie.includes("cherry")){
    console.log(`${pie} at is a fruit pie!`)
} else{
    console.log(`${pie} is not a fruit pie`)
}
}

/*
    Platinum:
    In the same console.log of Gold challenge, add an index of the fruit pie to be displayed. The output should look like this: 'the  __ pie at __ index is a fruit pie!' or 'the __ pie at __ index is not a fruit pie :('. While you are at it, make the first letter of the fruit pie into upper case.

    - Use google to search for an array method that checks indices of an array
*/

let pies = ['apple', 'blueberry', 'apple peach', 'chocolate peanut butter', 'cherry','cherry apple', 'oreo', 'chicken pot', 'shepherd']

for(let pie of pies){
    if(pie.includes("apple") || pie.includes("blueberry") ||pie.includes ("peach") || pie.includes("cherry")){
console.log(`${pie[0].toUpperCase()}${pie.slice(1)} at ${pies.indexOf(pie)} index is a type of fruit pie`)
    } else{
        console.log(`${pie[0].toUpperCase()}${pie.slice(1)} at ${pies.indexOf(pie)} index is not a type of fruit pie`)
    }
}
