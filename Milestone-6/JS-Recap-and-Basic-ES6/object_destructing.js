// basic

const person = {
    name: "Israk",
    age: 22, 
    country: "BD",
}

const {name, age} = person;

console.log(name);
console.log(age);

// renaming variables
const student = {
    id: 222262038, 
    sec: "A",
}

const {id: fullID, sec: secNo} = student;

console.log(fullID),
console.log(secNo);