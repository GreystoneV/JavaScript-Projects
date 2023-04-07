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