/*
LITERALS

1-grammarAndTypes
06-Literals.js
*/

let weekDays = ["Monday", "Tuesday", "Wednesday" , "Thursday", "Friday"]
        //          0         1          2              3         4
console.log(weekDays.toString()); //turns content into a single string
console.log(weekDays[3]);

let soup = {
    a: "chicken noodle",  //key a, value is chicken noodle
    b: "tomato",
    c: "beef and barley"
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex' types (arrays, objects, functions)

let complexArrLiteral = [1, true, "academy", [1,2,3], {key: "test"}, function(){return "yes"}]  // function isn't named - called an anonymous function
//                         0    1       2          3        4               5

console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: "Academy", arr: [1,2,3], obj: {key: "test"}, func: function(){return "yes"}}; //key num value 1, key boolean value true etc.

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);