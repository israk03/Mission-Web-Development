// "..."

// using spread with arrays

// copying arrays
const orgArr = [1, 2, 4, 5];
const copyArr = [...orgArr];
console.log(copyArr);
copyArr.push(5);
console.log(copyArr);
console.log(orgArr);

// combinig arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 9];
const combinigArr = [...arr1, ...arr2];
console.log(combinigArr);

// finding the max value
const num = [1, 3, 4, 5, 6, 3, 2, 2];
const maxNum = Math.max(...num);
console.log(maxNum);


// using spread with objects

// copying objects
const orgObj = {name: 'Israk', age: 22};
const copyObj = {...orgObj};
console.log(copyObj);