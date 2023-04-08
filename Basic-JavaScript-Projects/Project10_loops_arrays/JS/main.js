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
// HA! Step 212 answered my question :) const
// And even more on step 214
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

// Step 213
// Function creates object, adds to it and changes a value. 
function constantFunction() {
    const someDict = { "10": "Decimal" };
    document.getElementById("Constant").innerHTML += someDict["10"];
    someDict["2"] = "Binary";
    someDict["10"] = "Still Decimal";
    document.getElementById("newConstant").innerHTML += someDict["10"];
    document.getElementById("addedConstant").innerHTML += someDict["2"];
}

// step 215
// showing how let allows a variable to be available within a certain scope "Block Scope"
var x = 10;
let y = 10;
for (y = 0; y < x; y++) {
    let z = 10
    document.getElementById("z").innerHTML = z;
}
// console.log(x, y, z); Commented out because z returns undefined in colsole

// Step 218
// function returns x to the variable result
function hungry() {
    var x = Math.PI.toFixed(5);
    return x;
}

result = hungry();
document.getElementById("return").innerHTML += result;

// Step 221 
// Create and object with let. Object method returns a description of the values of itself
let house = {
    type: "Bungalo",
    year: 1990,
    sqft: 3000,
    listing: function () {
        return `This ${this.type} was built in ${this.year}. It has ${this.sqft} square feet.`;
    }
};
document.getElementById("houseObj").innerHTML = house.listing();

// Step 222
// break statement can be used to terminate a loop
// loop adds kvp into dict1. The loop should run until y = 4 but it gets stopped buy the break because it was equal to 3
i = 4;
var dict1 = {}
for (y = 0; y < i; y++) {
    if (y == 3) {
        break;
    }
    dict1[y] = i;
    console.log(dict1);
}

