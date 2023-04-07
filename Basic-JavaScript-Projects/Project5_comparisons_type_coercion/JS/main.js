// Step 105 display the type of the variable x
var x = true;
document.write(typeof (x) + "<br>");
// Step 106
var y = 10;
document.write("Hello" + y + "<br>");
document.write("10" + y + "<br>");
document.write(10 + y + "<br>");
// Step 109
document.write(0 / 0 + "<br>");
document.write(isNaN("Hello") + "<br>");
document.write(isNaN(24) + "<br>");
// Step 112
function infinity() {
    var bigNum = (3E400);
    document.getElementById("inf").innerHTML += bigNum;
}
function negInfinity() {
    var smallNum = (-3E400);
    document.getElementById("neg").innerHTML += smallNum;
}

// step 114 use boolean logic
if (6 > 12) {
    document.write((6 > 12) + "<br>");
}
else {
    document.write((12 > 6) + "<br>");
}

// Step 116 perform math opperation with console.log funct
console.log(2 + 2);

// Step 117 display false in the console using boolean logic and console.log
console.log(2 < 1);

// Step 119 use == in colsole.log
console.log(2 == 2);
console.log(2 == 3);

// Step 121
console.log(2 === 2);
console.log(3 === '2');
console.log(2 === '2');
console.log(2 === 3);

// Step 123
document.write((10 > 0 && 10 > 1) + "<br>");
document.write((10 > 0 && 10 > 11) + "<br>");

//  Step 125
document.write(!(24 > 100) + "<br>");
document.write(!(24 < 100) + "<br>");
