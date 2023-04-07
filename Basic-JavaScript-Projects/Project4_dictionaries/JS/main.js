// step 98
// create dictionary and display one of its values
function myDictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    // delete KVP under k Age
    delete Animal.Age;
    // Display Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;

}