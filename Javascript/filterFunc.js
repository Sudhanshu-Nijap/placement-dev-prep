let arr = [1,2,3,4,5,6];
let ans = arr.filter((num) => {
    return num%2===0;
})

let brr = [1,"sudhanshu",2,"nijap"];
let ans2 = brr.filter((num) => {
    if (typeof(num) === 'string'){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans)
console.log(ans2)
