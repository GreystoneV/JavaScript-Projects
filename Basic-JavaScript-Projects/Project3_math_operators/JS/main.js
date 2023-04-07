// Line 1 through 25 are functions utilizing basic arithmatic operators.
function addition() {
    var result = 1 + 2;
    return document.getElementById("Math").innerHTML = result;
}

function subtraction() {
    var result = 1 - 2;
    return document.getElementById("sub").innerHTML = result;
}

function multiply() {
    var result = 1 * 2;
    return document.getElementById("mul").innerHTML = result;
}

function divide() {
    var result = 1 / 2;
    return document.getElementById("div").innerHTML = result;
}

function pemdas() {
    result = (3 + (-1)) * 2 / .5
    return document.getElementById("pemdas").innerHTML = "All of the answers together =  " + result + ".";
}
// step 87
// The next two functions utilize the modulo operator to check for even or odd
function even() {
    if (8 % 2 === 0) {
        result = true;
        return document.getElementById("even").innerHTML += result;
    }
}
// Step 87
function odd() {
    if (7 % 2 === 0) {
        result = true;
        return document.getElementById("even").innerHTML += result;
    }
    else {
        result = false;
        return document.getElementById("odd").innerHTML += result;
    }
}
// Step 89
// Function utilized the urnary operator
function posNeg() {
    var x = 10;
    return document.getElementById("posNeg").innerHTML += -x;
}

// step 91
// Function adds 1 to y and subtracts 1 from z
function incrementDecrement() {
    var y = 10;
    var z = 10;
    y++;
    z--;
    return document.getElementById("incDec").innerHTML = `10 + 1 and -1 becomes: ${y} and ${z}`;
}

// Step 93 
// random number between 1 and 100 but to the hundreths place
window.alert((Math.random() * 100).toFixed(2));

// Step 94
// The JS Math object is defined as follows: The JavaScript Math object allows you to perform mathematical tasks on numbers.
// Unlike other objects, the Math object has no constructor, the Math object is static, and all methods and properties can be used without creating a Math object first.
// Function shows pie to five digits
function pie() {
    var pie = Math.PI.toFixed(5);
    return document.getElementById('PIE').innerHTML += pie;
}