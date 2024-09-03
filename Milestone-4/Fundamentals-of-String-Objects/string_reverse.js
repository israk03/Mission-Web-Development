// using for loop

let str = "JavaScript";

let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--){
    reverseStr += str[i];
}

console.log(reverseStr);




// using split(), reverse(), join()

let name = "ISRAK";

let rev = name.split("").reverse().join("");

console.log(rev);