function getEvenNum(numbers){
    let evenNum = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNum.push(numbers[i]);
        }
    }

    return evenNum;
}

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = getEvenNum(n);

console.log(res);