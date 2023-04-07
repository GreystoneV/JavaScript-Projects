//This function is called in our html when the user clicks the button. It replaced the button text with the cariable str. The text hello world gets replaced by the variable i which is the value at index 0 of the string str. 

//Im not sure if this is what you wanted in the assignment that said to initilize 2 variables and to use a previous function. 
function myFirstFunction() {
    var str = "This is the button text!";
    var i = str[0];
    console.log(i);
    document.getElementById("Button_Text").innerHTML = str;
    document.getElementById("par").innerHTML = i;
}
//Function uses the += operator to concatenate itself with another string. This function is called in our html body when the user clicks on the paragraph content. It replaced that content with sentence. 
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

//Stores color of text element with id Concatenate, stores the element, checks if the color is equal to green, if so, changes color to blue.
// Step 75 challenge
function changeColor() {
    colorCheck = document.getElementById("Concatenate").style.color;
    targetEle = document.getElementById("Concatenate").innerHTML;
    if (colorCheck === 'green') {
        colorCheck = targetEle.fontcolor("blue");
        document.getElementById('Concatenate').innerHTML = colorCheck;
    }
}
