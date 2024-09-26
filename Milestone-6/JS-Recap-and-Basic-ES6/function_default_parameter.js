// single default parameter
function greet(name = "Guest"){
    console.log(`Hello, ${name}!`);
}

greet("ISRAK");
greet();


// multiple default parameter
function multiple(a = 1, b = 1){
    return a * b;
}

console.log(multiple(5, 2));
console.log(multiple(5));
console.log(multiple());