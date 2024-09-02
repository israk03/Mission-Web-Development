let weight = 79;
let height = 1.75;

let bmi = weight / (height * height);

if (bmi < 18.5){
    console.log("Your BMI is " + bmi.toFixed(1) + ". You are underweight.");

}
else if (bmi >= 18.5 && bmi <=24.9){
    console.log("Your BMI is " + bmi.toFixed(1) + ". You are normal.");

}
else if (bmi >=25 && bmi <= 29.9){
    console.log("Your BMI is " + bmi.toFixed(1) + ". You are overweight.");

}
else{
    console.log("Your BMI is " + bmi.toFixed(1) + ". You are obese.");
}