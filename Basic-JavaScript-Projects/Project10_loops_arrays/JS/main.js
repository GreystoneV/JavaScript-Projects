// Step 197
// Function writes the value of x to different paragraphs. The value of the id incriments along with x.
function callLoop() {
    let x = "1";
    let idVar = "";
    while (x < 6) {
        idVar = x;
        document.getElementById(idVar).innerHTML = x;
        x++;
    }

}
// finds length of x and displays it
function callLength() {
    let x = "Hello Friend!";
    document.getElementById("length").innerHTML += x.length;
}

// Step 200
// I wonder if JS has list comprehension?
var Instruments = ["Banjo", "Drums", "Battle-Axe"];
var Content = "";
var Y;
// It's weird to not have to pass in variables to the functions. Is this normal? I'm used to having to declare a variable global.
// Doesn't having every variable outside functions be global, create issues? Or do you just have to be more careful with naming conventions? 
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = Content;
}

// Step 205
// Initilize array animals, set values at various index, 
// Interesting that you can skip an index and it will return undefined
var animals = [];
animals[0] = "Cat";
animals[1] = "Dog";
animals[3] = "Fish";

function arrayFunction() {
    document.getElementById("array").innerHTML = animals;
}