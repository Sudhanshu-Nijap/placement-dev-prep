// Types of Data Types
// 1. Primitive datatypes: undefined, null, number, string, boolean, symbol 
// 2. Reference datatypes: array and object 

// number
let num = 100;
let num2 = 55.2;

// string
let str = "Sudhanshu";
let str2 = 'Nijap';

// objects (dictionary)
let user = {
    "name": "Sudhanshu",
    "age": 19,
    "marks": 8.56
}

// arrays
let arr = [1,2,"nijap",4,5]

for (let i=0 ; i< arr.length; i++){ // printing one-by-one
    console.log(arr[i])
}

console.log(arr) // print full array

// boolean
let bool = true;

// undefined - variable declared but no value assigned
let und;

// null - intentionally assigned "no value"
let n = null;

console.log(num);
console.log(num2);

console.log(str);
console.log(str2);

console.log(user);

console.log(bool);

console.log(und);

console.log(n)