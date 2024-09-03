let correctNum = 3;
let guess = 0;

while (guess !== correctNum){
    guess = parseInt(prompt("Guess the number between 1 to 5:"));

    if (guess !== correctNum){
        console.log("Try again.");
    }
}

console.log("You guessed the correct number.");