// basic syntax: const functionName = (parameters) => expression


// no parameter
const sayHi = () => "Hello..."
console.log(sayHi());

// single parameter
const greet = name => `Hello, ${name}`;
console.log(greet('Israk'));

// multiple parameters
const sum = (a, b) => a + b;
console.log(sum(5, 9));