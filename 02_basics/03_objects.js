// Singleton 
// object literals 
// Object.create

const symb = Symbol("Key1")

const jsUser = {
    name: "Sujal Tamang ",
    "Full Name ": "Sujal Pakhrin",
    [symb]: "Key1",
    age: 19, 
    email: "sujaltmang@gmail.com",
    address: "Kathmandu, -6, Nepal ",
    isLoggedIn: false,
    lastLogginDays: ["Sunday","Monday"]
}
// console.log(typeof jsUser[symb]);
// console.log(jsUser.email);
// console.log(jsUser.email);
// console.log(typeof jsUser["age"]);
// console.log(typeof jsUser["Full Name"]);

jsUser.email = "fk@gmail.com";
Object.freeze(jsUser);
jsUser.email = "samsung@gmail.com";

// console.log(jsUser);
// console.log(jsUser);

