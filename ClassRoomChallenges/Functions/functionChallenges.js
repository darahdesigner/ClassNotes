// COUNTING SUM CHALLENGE

// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers. 

//Results for testing
// countingSum(1, 100) // = 4949
// countingSum(35, 77) // = 2408
// countingSum(234, 567) // = 133767

function countingSum(start, stop) {
    let sumItUp = 0;
    for(let i = start+1; i < stop; i++){ //condition is looking for true false (i<false), but initializing value can't have <> let i = start+1
        sumItUp += i //sum = sum + i

    }
    console.log(sumItUp);
}

countingSum(1,100)