function check(num){
    if(num % 2 === 0){
        return num + " is EVEN.";
    }
    else{
        return num + " is ODD.";
    }
}

let number1 = check(4);
console.log(number1);

let number2 = check(7);
console.log(number2);