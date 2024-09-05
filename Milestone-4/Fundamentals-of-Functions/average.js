function avg(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum / num.length;
}

let n = [1, 2, 3, 4, 5, 5];

let res = avg(n);

console.log(res);