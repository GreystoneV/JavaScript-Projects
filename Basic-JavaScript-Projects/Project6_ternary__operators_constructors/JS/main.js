// Step 128
// Use ternary operator to check if input is greater than 52 and then display if user is tall enough or not.
function rideFunction() {
    var Height, canRide;
    Height = document.getElementById("Height").value;
    canRide = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride.";
}

// Step 129
// I noticed that if you enter a symbol or letter into the input field you dont get an error like you would in python. Instead it defaults to the right side of the ternary expression. I wonder why that is.

// does the same thing as the fucntion above except with different values and outputs
function Vote() {
    var age, canVote;
    age = document.getElementById("Age").value;
    canVote = (age >= 18) ? "You are old enough to vote." : "You are not old enough to vote.";
    document.getElementById("v").innerHTML = canVote;
}
// Step 133
// creates an object contructor Vehicle()
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Initilizes objects with new information
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
// called by button in html to display the object Eric's values in a sentence.
function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML = "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}