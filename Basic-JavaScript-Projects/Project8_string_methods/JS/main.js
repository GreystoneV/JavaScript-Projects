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