/**
 *   syntax: 
        const element = array.find((element, index, array) => {
            return condition;
        });

    Kind of filter but used when you want to find a single element.
 */

const num = [1, 2, 3, 4, 5, 6, 7, 8];

const firstEven = num.find(n => n % 2 === 0);

console.log(firstEven);