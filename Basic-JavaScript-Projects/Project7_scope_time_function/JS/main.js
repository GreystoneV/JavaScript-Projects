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

// Step 147 function to check what is greater among the arguments given
function checkLength(n1, n2) {
    if (n1 > n2) {
        document.write(n1);
    }
    else if (n1 === n2) {
        document.write(`${n1} ${n2}!`);
    }
    else {
        document.write(n2);
    }
}

var num1 = 14;
var num2 = 14;
checkLength(num1, num2);

// Step 149
// Takes user input from html. computer randomly pick number between 1 and 10. Function compares and displays who had the hight number.
function guessGame() {
    var guess, compGuess;
    guess = document.getElementById('uInput').value;
    console.log(guess);
    compGuess = Math.round(Math.random() * 10);
    console.log(compGuess);
    if (compGuess > guess) {
        document.getElementById("result").innerHTML += "Computer!";
    }
    else if (compGuess == guess) {
        document.getElementById("result").innerHTML += "Tie!";
    }
    else {
        document.getElementById("result").innerHTML += "Player!";
    }
}

// Step151
// Gets the hour of the day and compares it to some numbers. It will display if it is morning afternoon or evening.
function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = Reply;
}