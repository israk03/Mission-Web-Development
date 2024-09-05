function count_zero(str){
    let count = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] === '0'){
            count++;
        }
    }
    return count;
}

let binaryStr = "11100000010101010";

let res = count_zero(binaryStr);

console.log(res);