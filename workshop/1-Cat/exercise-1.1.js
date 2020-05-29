// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// Objects created via this class should have the following properties:
/*
{
  species: 'cat',
  tiredness: 0,
  hunger: 0,
  loneliness: 0,
  happiness: 0,
}
*/

class Cat {
  constructor(species, tiredness, hunger, loneliness, happiness){
    this.species = species;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }
}

// B) Instantiate a cat called 'boots' with the Cat class.
let boots = new Cat('Highland Lynx', 3, 10, 2, 7);

// C) What do you see when you console.log(boots)?
console.log(boots);

// D) What if I want to output just boots' species?
console.log(boots.species);