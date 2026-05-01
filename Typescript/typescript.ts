let a:string = "j";
a = "l";
console.log(a)

// Object type
type User = {
    "name": string,
    "age": number
};

const user: User = {
    "name": "Sudhanshu",
    "age": 20
};


console.log(user)

// object interface

interface User2 {
    "name2": string,
    "age2"?: number
};

interface Admin extends User2 {
    "role": string,
};

const admin: Admin = {
    "name2": "Sudhanshu",
    // "age2": 20,
    "role": "admin"
};

console.log(admin)
