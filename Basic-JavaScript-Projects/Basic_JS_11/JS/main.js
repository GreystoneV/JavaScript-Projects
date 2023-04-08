// Step 235
// function gets information by class and then changes it based on the given index
function change() {
    var x = document.getElementsByClassName("test");
    x[0].innerHTML = "We are many.";
    x[1].innerHTML = "We are few.";
}

// Step 239
function draw() {
    // set our config variables
    canvas = document.getElementById('Pic');
    ctx = canvas.getContext('2d');

    // outlined square X: 50, Y: 35, width/height 50
    ctx.beginPath();
    ctx.strokeRect(100, 100, 50, 50);

    // filled square X: 125, Y: 35, width/height 50
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white")
    ctx.beginPath();
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}
