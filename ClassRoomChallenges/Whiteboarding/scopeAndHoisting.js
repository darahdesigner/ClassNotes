let x = 12;

function scope(){
    let x = 33;
    console.log("local", x); // pulls from local (within curly braces)
}
scope();
console.log("global", x);//pulls from global

// var is older than let, and messes up scope for global/local
// Const isn't affected either


// let and const do not get hoisted
