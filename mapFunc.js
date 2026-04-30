// map - when you want to create a NEW array by changing each element
// syntax: array.map( (value, idx, array)=>{ stmts } );

// 1. square into another array
let arr = [1,2,3,4];

let ans = arr.map((num) => {
    return num*num;
})

console.log(ans)

// 2. just print
arr.map((num,i) => console.log(num,i));