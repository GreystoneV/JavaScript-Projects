
// window.alert("Hello World!");
document.write("Hello world! ")
var A = "This is a string. ";
document.write(A);
// window.alert(A);
var B = "This \\ is a backslash.";
document.write(B);
var hello = "Hello ";
var world = "World!";
document.write(hello + world);
var hello_world = hello + world;
document.write(hello_world);
//sets x y and z variables
var x = "This", y = " is", z = " JavaScript.";
document.write(x + y + z);
var math = 10 + 20;
document.write(math);
// this function, which is called on line 11 in out html file, sets the variable str and replaces the button text with it.
function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
//I wonder why this blocks all the other text. I tried putting it at the top of the file thinking it might be a control flow issue but that did not seem to help.
function first_pop_up() {
    var hello_again = "Welcome back to our site!";
    document.write(hello_again);
}