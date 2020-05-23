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

    constructor (initialSpecies, initialTiredness, initialHunger, initialLoneliness, initialHappines)
   
    {
      this.species = initialSpecies;
      this.tiredness = initialTiredness
      this.hunger = initialHunger;
      this.loneliness = initialLoneliness;
      this.happiness = initialHappines;
    }
  // Add code here
}

var boots = new Cat('cat', 0, 0, 0, 0);
console.log(boots);
console.log(boots.species)


// B) Instantiate a cat called 'boots' with the Cat class.

// C) What do you see when you console.log(boots)?

// D) What if I want to output just boots' species?
