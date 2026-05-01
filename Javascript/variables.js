// let - used when variable is changed or updated
let count = 0;
count++;

console.log(count)

// const - used when variable should not be reassigned
const pi = 3.14;
const user = {"name":"Sudhanshu"};

console.log(pi)
console.log(user)

pi = 3.25 // error
user["name"] = "Raj";

console.log(pi)
console.log(user)

// var - dont use it (not recommended)
// Problem - can reassign values to variable
var x = 9;
console.log(x)

var x = 0 // technical it should be error but no error
console.log(x)
