let numbers = [1, 3, 4, 6, 7, 11];
let target = 7;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === target){
        console.log("Found the target number.");
        break;
    }
}