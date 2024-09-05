// using reverse() method
let num = [1, 3, 4, 5, 6, 8, 10];
num.reverse();
console.log(num);




// using unshift() in a for...of loop
let nu = [10, 20, 30, 40, 50];
let rev_nu = [];

for (let n of nu){
    rev_nu.unshift(n);
}
console.log(rev_nu);




// using a for loop
let numbers = [15, 25, 35, 45];
let rev_num = [];

for(let i = numbers.length - 1; i >= 0; i--){
    rev_num.push(numbers[i]);
}
console.log(rev_num);