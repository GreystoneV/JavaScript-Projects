//This function is called in our html when the user clicks the button. It replaced the button text with the cariable str. The text hello world gets replaced by the variable i which is the value at index 0 of the string str. 

//Im not sure if this is what you wanted in the assignment that said to initilize 2 variables and to use a previous function. 
function My_First_Function() {
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
