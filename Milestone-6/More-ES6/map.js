/**
    Basic syntax: 

        const newArray = array.map(function(element, index, array){
            return the transformed value for each element
        });

    or with an arrow function: 
        const newArray = array.map(element => {
            return transformedElement;
        });
 */

// square each number in an array
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(num => num * num);
console.log(square);

// convert string to Uppercase
const friends = ["ratul", "shohag", "shiben"];
const upperFrnd = friends.map(frnd => frnd.toUpperCase());
console.log(upperFrnd);

// add 10 to each number
const num = [10, 11, 12, 13, 14, 15];
const updateNum = num.map(n => n + 10);
console.log(updateNum);