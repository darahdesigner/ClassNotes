/*
COMPARISON OPERATORS
5-expressionsAndOperators
    02-comparisonOperators.js
    */

    // equality comparison operator
    // behind the scenes it is doing type coersion, on line 10 because the value matches.
    console.log("3" == 3);
    console.log(4 == 4);
    console.log(4 == '3');

    //strict equality comparison operator
    console.log(3 === 3);
    console.log('3' === 3);

    //not equal comparison operator
    console.log('3' != 4);
    console.log('3' != 3);

    //strict not equal comparison operator
    console.log('3' !==3);
    console.log(3 !== 3);

    //greater than
    console.log(3 > 2);
    console.log(3 < 2);

    //less than
    console.log(2 < 3);
    console.log(3 < 2);

    // greater than or equal to
    console.log(3 >= 2);
    console.log(3>= 3);

    // less than or equal to
    console.log(2 <= 3);
    console.log(3 <= 2);

    // And (both expressions on either side of the opereator must be true for 'and' to return true)
    console.log(1<2 && 3>0);
    console.log(21 && 3>0);

    // Or (either expression on one side of the operator must be true for 'or' to return true)
    console.log(1<2 || 3<2);
    console.log(2<1 || 3<0);

    let obj = {key: 'test'};
    console.log(obj == {key: 'test'}); //this is false because they are duplicates of each other

    console.log(obj == obj);

    let arr = [1,2,3,4];
    console.log(arr == [1,2,3,4]); //these items have the same contents but are not the same things
    console.log(arr == arr);
