const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_Heros = ["superman", "flash", "batman"]

// heros.push(dcHeros)
// console.log(heros);
// const allHearos = marvel_heros.concat(dc_Heros)
// console.log(allHearos);


let samsung = ["electrict", "Mell"]
const allNewHero = [ ...marvel_heros,...dc_Heros,...samsung]

console.log(allNewHero);


const achammakoArray = [ 1, 2, 3 [4, 5, 6], 7 [6, 7,[5, 6]]]

const mergeArray = achammakoArray.flat(Infinity)

console.log(mergeArray);



console.log(Array.isArray('Tamang'));  // output = false

console.log(Array.from("12345678910111213")); // Output [
//     '1', '2', '3', '4', '5',
//     '6', '7', '8', '9', '1',
//     '0', '1', '1', '1', '2',
//     '1', '3'
//   ]

// console.log(Array.from({name: "sujal"}));   // Intresting (*_*) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // output [ 100, 200, 300 ]
