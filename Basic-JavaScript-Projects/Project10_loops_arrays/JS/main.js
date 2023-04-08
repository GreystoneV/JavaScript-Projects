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

function callLength() {
    let x = "Hello Friend!";
    document.getElementById("length").innerHTML += x.length;
}
