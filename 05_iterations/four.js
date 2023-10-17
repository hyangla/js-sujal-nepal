

const myobject = { 
    js : 'JavaScript',
    cpp: 'C++',
    rb : 'Ruby',
    swift : 'Apple'
}
for (const key in myobject) {
    
// console.log(`shortform of ${key} is ${myobject[key]}`);
}


const programming = ['js','rb','java','cpp']

for (const key in programming) {
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('NP',"Nepal")
map.set('USA',"United state of Americal")
map.set('DKT', 'Dhankuta')
map.set('NP',"Nepal")


for (const key in map) {
    console.log(key);
    
}
