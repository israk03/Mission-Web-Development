/*
    syntax: 
        const newArray = array.filter((element, index, array) => {
            return condition;
        });

    * It’s used to filter out elements based on a condition.
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = num.filter(n => n % 2 === 0);

console.log(evenNum);
console.log(...evenNum);