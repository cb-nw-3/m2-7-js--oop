// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...

class Cat {

    constructor (initialName, initialSpecies, initialTiredness, initialHunger, initialLoneliness, initialHappines) {

      this.name = initialName;
      this.species = initialSpecies;
      this.tiredness = initialTiredness
      this.hunger = initialHunger;
      this.loneliness = initialLoneliness;
      this.happiness = initialHappines;

      
    }
  // Add code here
}

var boots = new Cat('boots', 'Siamese', 0, 0, 0, 0);
console.log(boots);
console.log(boots.species)