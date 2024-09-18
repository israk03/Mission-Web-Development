// option 2: add on click function on HTML elements [IMPORTANT WE WILL USE THIS]

function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// option 3 (a):
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makeBlueColor;   
function makeBlueColor(){
    document.body.style.backgroundColor = 'blue';
}


// option 3 (b):
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function(){
    document.body.style.backgroundColor = 'purple';
}


// option 4 (a): 
const pinkBtn = document.getElementById("make-pink");
pinkBtn.addEventListener("click", makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}


// option 4 (b):
const greenBtn = document.getElementById("make-green");

greenBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = 'green';
})


// FINALLLLLLLLLLL
document.getElementById("make-orange").addEventListener("click", function(){
    document.body.style.backgroundColor = 'orange';
})
