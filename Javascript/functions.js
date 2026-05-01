// DRY principle - Do not Repeat Yourself

function avg(a,b){
    return (a+b) / 2;
}

res = avg(10,20)
console.log(res)

// Callback function - a function passed into another function

// 1. callback 
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Sudhanshu", sayBye);

// 2. callback
function calc(x, callback){
    console.log("num1: ",x);
    return x + callback();
}

function num2(){
    console.log("num2: ",7)
    return 7
}

let r = calc(10,num2)
console.log(r)

// 3. using arrow function

// Function is called with values: x = 20, i = 5, callback = (y) => y + 10
// Inside the function, i is increased by 5 -> i becomes 10
// Callback function is executed with i -> callback(10)
// Callback logic runs -> 10 + 10 = 20
// Now main calculation happens -> x - result = 20 - 20
// Final result - 0

function sub(x, i, callback) {
  i += 5;
  return x - callback(i);
}

let ans = sub(20, 5, (y) => y + 10);
console.log(ans);


// Arrow function - short hand method using arrow
// 1.
const mul = (a, b) => a * b;
console.log(mul(2, 3));

// 2.
const c = (a,b) => {
    console.log("a:", a,"b:",b);
    return a+b;
}

console.log(c(1,1))

// 3.
const printj = (i,j) => {
    console.log(j)
    j += 9
    console.log(j)
}

printj(9,9)

// 4.
const empty = () => {
    return "heyyy";
}
console.log(empty())