// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...

//creat Cat class
//update the Cat class and put breed and name as parameter
//pass Boots name and breed as arguments
//console.log the boots object
//rename Boots for Simaese

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.hunger = 0;
    this.species = "cat";
    this.tiredness = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
}

let kitty = new Cat("Boots", "Simaese");

console.log(kitty);
