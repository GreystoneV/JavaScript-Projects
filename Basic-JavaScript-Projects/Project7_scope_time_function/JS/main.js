var x = "hello";
function something() {
    var y = "world";
    // both x and y get written to the document because x is global and y in declared in the function
    document.write(y);
    document.write(x);
}
// logging y or writing y will not work because it was defined in the scope of the function something()
// console.log(y);
// x will write to the coument because it is a global variable and can be called here or in a function
document.write(x);
// call function something
something();

// Step 146 make function to check time and return what the user should do if it is past 7 pm, uses if else
function check() {
    yee = new Date().getHours();
    if (yee < 19) {
        document.getElementById('time').innerHTML = "Study!";
    }
    else if (yee > 19) {
        document.getElementById('time').innerHTML = "Sleep!";
    }
    else {
        document.getElementById('time').innerHTML = "Something went so very very wrong!"
    }
}
