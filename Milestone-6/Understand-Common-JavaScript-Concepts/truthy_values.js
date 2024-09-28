// A truthy value is any value that is not falsy. In other words, every value in JavaScript is truthy except for the 6 falsy values.


// true — The Boolean true itself.
if (true){
    console.log("Truthy");
}


// Non-zero numbers — Any number other than 0 (including negative numbers).
if (42){
    console.log("Truthy");
}


// Non-empty strings — Any string that is not empty.
if ("hello"){
    console.log("Truthy");
}



// Arrays — Even an empty array ([]) is considered truthy.
if ([]){
    console.log("Truthy");
}



// Objects — Even an empty object ({}) is considered truthy
if({}){
    console.log("Truthy");
}



// Infinity — Positive or negative infinity is truthy.
if(Infinity){
    console.log("Truthy");
}