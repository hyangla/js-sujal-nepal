// if 
// < (Less then )
// > (Greater Then)
// <= ( )
// >= (Lessthen greater)
// != ( Not equal to)
// >=, (less then equal to )
// ==, ( equal to )
// != ( not equal to )
// === ( Equal to )
// !== (Negative)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 50) {
//     console.log("less then 100 ");
    
// }else{
    
//     console.log("temerature is greater than 50");
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const score = 300 
// if (score > 200) {

//     let power = "fly"
    
//     console.log(`The power will be : ${power}`);

    
// }
// is we use var then funcation will exicute out side of funcation as well // so use let and const // ignore *Var* 
//+++++++++++above the line shows that scope will exicute in side the funcation // 


// const balance = 1000
// if (balance > 500) console.log("test"), 
// console.log("test2");


// +++Don't use coma to continue write code 


// let balance = 800
//  if (balance< 500) {
//         console.log("less then 500 ")       
//  }else if (balance<750){
//         console.log("less then 750");
//  }else if (balance<900){
//         console.log("less then 900");
//  }
//  else console.log("less then 1200");


const userLoggedIn = true 
const userDabiteCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && userDabiteCard) {
    console.log("Please Click to continue ");
    
}
 
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Plese go head .....");
    
}