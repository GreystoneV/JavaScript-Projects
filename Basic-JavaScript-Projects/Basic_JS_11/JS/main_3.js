// Step 264 
//  Utilizes data-
// I think using 'this' in the function actually opened my eyes
// to the interworking of JS syntax. I'm assuming it is acting like 'this.something' in an object.
// Or is 'this' just a place holder like i in a loop?
function breedOf(animal) {
    var playmate = animal.getAttribute("data-animal-type");
    alert(`A ${playmate} is your new playmate!`)
}