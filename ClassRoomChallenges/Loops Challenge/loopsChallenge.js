// let newArr = [10, 23, 64, 12, 41, 76, 53];
// let sum=0;
/* BRONZE For the given array write a for loop for addition of all numbers of the array*/


// for (let i=0; i<= newArr.length -1; i++){
//     sum = sum+newArr[i]
// }
// console.log(sum);

// SILVER
/* 
Using the same array (newArr),get a sum of the index and element of that index. 

For example: 
Let's look at the 0th element, which is 10. 
10(element) + 0(index of 10) = 10
Now let's look at the 1st element, which is 23.
23(element) + 1(index of 23) = 24

The addition should update the array itself and you should'nt have to 
create a new array. So when you are done, newArr should look like this:
[10, 24, 66, 15, 45, 81, 59]
*/
// let newArr = [10, 23, 64, 12, 41, 76, 53];
// let sum=0;
// for (i=0; i<newArr.length; i++){
//     sum = i + newArr[i];
//     console.log(sum);
//     newArr[i]=sum;
// }
// console.log(newArr)


let newArr = [10, 23, 64, 12, 41, 76, 53]
/*
Declare a new variable called arr that will be initialized 
as an empty array. Inside the loop, if the number in newArr 
is a prime number,insert it in arr and using string interpolation -
 console.log 'the number ___ is a prime number'. 
 
 Hint-Use Google to search for an array method that allows you to 
 add one or more elements to an array

*/

let newArr = [10, 23, 64, 12, 41, 76, 53]
let primeArr = [];

// function isPrime(num) {
//     for(let i=2; i<num; i++)
//     if(num % i === 0) return false;
//     return num > 1;
// }

// for (i=0; i<newArr.length; i++){
//     if(isPrime(newArr[i])){
//         primeArr.push(newArr[i]);
//         console.log(`${newArr[i])} is a prime number.`)
//     }
// console.log(primeArr)

//Alternate solution
// for (let i = 0; i< newArr.length; i++){
//     let isPrime=true;
//     if(newArr[i] > 1){
//         for(let j= 2; j < newArr[i] -1; j++){
//             if(newArr[i] % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

// if (isPrime){
//     console.log(`${newArr[i]} is a prime number`);
//     arr.push(newArr[i]);
// }else{
//         console.log(`${newArr[i]} is not a prime number.`)
//     }
// }    

// console.log(arr)