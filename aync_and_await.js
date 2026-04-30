// async and await
// Use async/await when you have async work like (API calls, DB calls, file reading)
// Also you want code that looks clean and easy like normal code.


async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    console.log(data);
}

getUsers();


// Looks like normal code
// await pauses execution until result comes
// try/catch handles error
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        console.log("Users:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();