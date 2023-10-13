// // const tinderUser = new Object()  // singleTermObject

//     // const tinderUser = {}               // nonSingleTermObject


//     // tinderUser.id = "123abc"
//     // tinderUser.name = "Shyam"
//     // tinderUser.isLoggedIn = false

//     // console.log(tinderUser);


//     const regualrUser = {

//         email : "me@gmail.com",

//         FullName : { 

//             UserfullName : {

//                     FirstName: "Sujal",
//                     lastName: "Tamang",
//             }
//         }
//     }

//     // console.log(regualrUser.FullName.UserfullName.lastName); // output 

//     const obj1 = {1: "a" , 2: "b"}
//     const obj2 = {2: "c" , 3: "d" }
//     const obj3 = {4: "e", 5: "f"}

// //const obj4 = {obj1, obj2, obj3}
// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);


                                        // oject dstructure method are as follows : 


const course = { 
    courseName : "Hacker",
    coursePrice : "3000k",
    courseInstruction : "Sujal ",
}

 const {courseInstruction:ins} = course

 console.log(ins);

//++JSON++ Example ---- are as follows :- 
//  {

//         "name" : "sujal ",
//         "coursename" : "Js in Nepali",
//         "price" : "free"
//  }


