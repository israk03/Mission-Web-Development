let num = [10, 2, 30, 4, 15];

// ascending order
num.sort(function(a, b) {return a - b;});

console.log(num);

// descending order
num.sort(function(a, b) {return b - a;});

console.log(num);