function check(n){
    if(n%2===0){
        return n/2;
    }
    return n*2;
}

let r1 = check(5);
console.log(r1);

let r2 = check(4);
console.log(r2);