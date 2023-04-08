// Step 157
// function utilizes the concat method
function addSentence() {
    var a = "This ";
    var b = "is ";
    var c = "something.";
    var sen = a.concat(b, c);
    document.getElementById("homer").innerHTML = sen;
}

// step 159
// function utilizes slice method
function sliceMethod() {
    var Sentence = "All work and no play make homer sad.";
    var Section = Sentence.slice(26, 35);
    document.getElementById("slice").innerHTML = Section;
}

// Step 160 utilize the search and touppercase method
var x = "hello there friend";
document.write(x.toUpperCase())
var pos = x.search("friend");
document.write(pos);

// Step 162
// converts number to string
function stringMethod() {
    var x = 182;
    document.getElementById("numbersToString").innerHTML = x.toString();
}

// step 164 
// function writes the variable out to the number of digits passed into toPrecision
function precisionMethod() {
    var x = 1234.5678987654321;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}
// Step 165
// use tofixed method and value of method
// to fixed counts after decimal point and precision is total places
function morePrecision() {
    var x = 12.34567890
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}
function valuedType() {
    var x = "seventy times"
    document.getElementById("value").innerHTML = x.valueOf();
}