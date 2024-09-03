// basic comparison
let str1 = "apple";
let str2 = "Apple";

console.log(str1 === str2);
// output: false


// case-insensitve comparison

// toLowerCase()
let s1 = "Israk";
let s2 = "israK";

console.log(s1.toLowerCase() === s2.toLowerCase);
// output: true

// toUpperCase()
let st1 = "night";
let st2 = "NIGHT";

console.log(st1.toUpperCase() === st2.toUpperCase);
// output: true


// trim()
let t1 = "  apple";
let t2 = "apple     ";

console.log(t1.trim() === t2.trim());
// output: true



// combining all these
let str11 = "   Apple   ";
let str22 = "apple";

console.log(str11.trim().toLowerCase() === str22.trim().toLowerCase());
// output: true
