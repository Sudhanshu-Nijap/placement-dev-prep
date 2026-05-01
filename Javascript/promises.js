// A Promise is used to handle async work (future result)

// It has 3 states:
// pending
// resolved (success)
// rejected (error)

// syntax: let promise = new Promise((resolve,reject) => { stmt });
//         promise.then((res) => console.log(msg));
//                .catch((err) => console.log(err));

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Done");
    } else {
        reject("Error");
    }
});

promise.then(res => console.log(res)) // for resolve 
       .catch(err => console.log(err)); // for reject

// Promise Chaining 
// Step-by-step chaining
// Each .then() waits for previous one
// .catch() handles error

// 1. Promise is created
let promise2 = new Promise((resolve, reject) => {
    let success = true;

    // 2. Condition checked
    if (success) {
        resolve(10);   // 3. Promise is RESOLVED with value 10
    } else {
        reject(-1);    // (not executed here)
    }
});

// 4. First .then() runs after promise is resolved
promise2
.then((res) => {
    console.log("First Msg", res); // 5. prints: First Msg 10
    return 20; // 6. passes 20 to next .then()
})

// 7. Second .then() receives 20
.then((res) => {
    console.log("Second Msg", res); // 8. prints: Second Msg 20
    return 30; // 9. passes 30 to next .then()
})

// 10. Third .then() receives 30
.then((res) => {
    console.log("Third Msg", res); // 11. prints: Third Msg 30
})

.catch((err) => {
    console.log("Error Msg", err);
})

.finally((res) => {
    console.log("always executes");
});


// 2. prints only if all promises are resolved
let p1 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})

let p2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 2500, "Second");
})

let p3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 5000, "Third");
})

Promise.all([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log("Error: ", err);
});