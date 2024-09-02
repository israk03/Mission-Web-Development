// AND (&&)
let age = 22;
let hasId = true;

if (age >= 18 && hasId){
    console.log("You can enter the club.")
}
else{
    console.log("You can't enter the club.")
}

// OR (||)
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday){
    console.log("You can relax today.");
}
else{
    console.log("You have to work today.");
}


// combining AND + OR
let isWeekendd = true;
let isHolidayy = false; 
let hasVacationn = true;

if ((isWeekendd || isHolidayy) && hasVacationn){
    console.log("You can go on a trip.");
}
else{
    console.log("You have to work.");
}