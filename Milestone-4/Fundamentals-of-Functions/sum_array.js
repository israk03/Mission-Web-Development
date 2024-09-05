function sumArray(numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

let arr = [1,2,4,5,6,7,7,8];
let res = sumArray(arr);

console.log(res);