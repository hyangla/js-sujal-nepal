// Primitive 

// 7 types : String, Boolen , Number , null, undefined, Symbol, 
// BigInt

//example are as follow as reminder :
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail;



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNuber = 34234234234234234n




// Reference (Non primitives )




// * To Master JavaScript you must learn Objects and web events 

// Array, Objects , Functions  //

const hero = ["Shaktiman", "naagraj", "doga"];
let myObj = {
        fullName : "Sujal",
        myAge:  35  ,
        myAddress:"Dhankuta -1, Hile",
}   

console.log(hero);

const  myFuncation = function(){ 
    console.log("Hello Sabina");
}

console.log(typeof id);



// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack ( Primitive), Heap ( Non-Primitive)

let myYoutubename = "sujal.com"


let userOne = {
    email : "thesujal@gmail.com",
    phone : "98122300033", 
    Address : "Kathmandu, nayabasti "

}

let userTwo = userOne 
userOne.email = "tmg@gmail.com"
console.log(userTwo)
console.log(userOne)
userOne.email = "fook@gmail.com"
userTwo.email = "end@gmail.com"
console.log(userOne)