/*

FOR IN LOOPS

 -For In loops count the enumerable properties in an object.
 -Objects contain what are known as enumerable properties - which just means countable. So although properties
 in an object dont contain an index like arrays, their properties can simply be counted.
 -a key - so think a key in an object- goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects and that 

*/

// let obj={
//     key1: "value", //1
//     key2: "value", //2
//     key3: "value", //3
//  }
//  console.log(Object.keys(obj).length)

//  for(key in obj){
//      console.log(key)
//  }

//  FOR OF for Arrays -- FOR IN for Objects!

/* BRONZE

    - Using a for in loop, console.log the name of each character 
	from the members key in the fellowshipOfTheRing object.

*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
/* SILVER
    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. 
    Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or
     '__'s name does begin with a vowel'.

*/
for (character in fellowshipOfTheRing.members){
    let vowelCheck = '^[aeiouAEIOU].*'
    let matched = character.match(vowelCheck);

    if(matched){
        console.log(`${character}'s name begins with a vowel`)
    } else {
        console.log(`${character}'s name does not begin with a vowel`)
    }
}

// Another solution
// let fellowshipOfTheRing = {
//     members: {
//         Gandalf: 'Staff',
//         Frodo: 'Sting',
//         Sam: 'Lembas Bread',
//         Aragorn: 'Anduril',
//         Legolas: 'Bow of the Galadhrim',
//         Gimli: 'Walking Axe',
//         Pippin: 'Barrow Blades',
//         Merry: 'Barrow Blades',
//         Boromir: 'Horn of Gondor'
//     },
//     purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
//     formed: '25 October, 3018',
//     dissolved: '26 February, 3019'
// for (character in fellowshipOfTheRing.members){
//     if (character[0] !== "A" && character[0] !== "E" && character[0] !== "I" && character[0] !== "O" && character[0] !== "U" && character[0] !== "a" && character[0] !== "e" &&character[0] !== "i" &&character[0] !== "o" &&character[0] !== "u"){
//         console.log(`${character}'s name does not begin with a vowel`)
//     } else{ console.log(`${character}'s name does begins with a vowel`)}
// }



//     if(character==0){
//         vowelName = members[character].includes("a" || "e" || "i" || "o" || "u"){
//         console.log(`${character}'s name begins with a vowel.`)
//     } else {console.log(`${character}'s name does not begin with a vowel.`)
// }
// }


// let instructor = "pAul";
// let capName;

// for (n in instructor){
//     if(n==0){
//         capName = instructor[n].toUpperCase();
//     } else {
//         capName += instructor[n].toLowerCase();
//     }
//     }
// console.log(capName);


/* GOLD

    - Declare a globally scoped variable of arr that is initialized 
	as an empty array. If the characters name does not begin with a vowel, 
	add that character to the new array, and then console.log the array.

*/
let arr = [];
for (character in fellowshipOfTheRing.members){
    let consCheck = '^[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ].*'
    let matched = character.match(consCheck);

    if(matched){
        arr.push(character)}
    console.log(`${character}'s name does not begin with a vowel`)}
    // } else {console.log(`${character}'s name does not begin with a vowel`)
    // }
