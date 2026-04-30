// errors 
// 1. compile time - before code execution (while parsing code into machine code)
// 2. runtime - while exection 

// 1. compile time - syntax error 
// console.log(1

// 2. runtime
// console.log(x) // x not defined

// error handling -> try - catch - finally
try{
    console.log("before error");
    console.log(x);
    console.log("after error");
}
catch(err){
    console.log("Error is: ",err)
}
finally{
    console.log("i always executes");
}



try {
    let x = 0;

    if (x === 0) {
        throw new Error("x should not be zero 🚫");
    }

    console.log(10 / x);
}
catch (err) {
    console.log("Custom Message:", err.message);
}
finally {
    console.log("Execution completed");
}