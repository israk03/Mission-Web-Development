// basic
const num = [1, 2, 3, 4];

const [first, second] = num;
console.log(first);
console.log(second);

// rest operator 
const [firstt, ...rest] = num;
console.log(firstt);
console.log(rest);