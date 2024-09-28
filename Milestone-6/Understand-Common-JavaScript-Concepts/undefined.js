// different ways you will get undefined

// Declaring a variable without initializing it:
let x;
console.log(x);

// Accessing an object property that does not exist:
const obj = {name: "Alice"};
console.log(obj.age);

// Accessing an array index that does not exist:
const arr = [1, 2, 3];
console.log(arr[5]);

// Function parameters not passed:
function greet(name){
    console.log(name);
}
greet();

// Return value of undefined variable:
let x;
function getValue(){
    return x;
}
console.log(getValue());

// Missing properties in destructuring:
const {name, age} = {name: "Alice"};
console.log(age);