const name = "Sujal "
const repoCount = " Tamang "

// console.log(name + repoCount + "Value ");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(` ${name}  ${repoCount}`);

const gameName = new String ('Sujal/tmg/Pakhrin')

console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("j"));


const newString = gameName.substring ( 0,5)
console.log(newString);

const anotherString = gameName.slice(-1,4)

console.log(anotherString);


const newStringOne = "     Sujal      "
console.log(newStringOne);
console.log(newStringOne.trim());   


const url = "https://sujal.com/zal%20tmg" // ( you can change)

console.log(url.replace('%20',"$"));


console.log(url.includes('sundar'));

console.log(gameName.split('/'));
console.log(gameName.bold());