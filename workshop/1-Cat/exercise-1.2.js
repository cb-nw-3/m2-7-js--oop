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
  constructor(name, breed, species, tiredness, hunger, loneliness, happiness) {
    this.name = name;
    this.breed = breed;
    this.species = species;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
}

let boots = new Cat("shadow", "Simaese", "cat", 0, 0, 0, 0);
console.log(boots);
console.log("species: ", boots.species);

// Cat {
//     name: 'shadow',
//     breed: 'Simaese',
//     species: 'cat',
//     tiredness: 0,
//     hunger: 0,
//     loneliness: 0,
//     happiness: 0
//   }
