// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// Objects created via this class should have the following properties:
/*
// {
  species: 'cat',
  tiredness: 0,
  hunger: 0,
  loneliness: 0,
  happiness: 0,
// }
*/

class Cat {
  constructor() {
    this.species = "cat";
    this.style = "flashy";
    this.name = "Leandra";
    this.loneliness = 0;
    this.happiness = 0;
    this.color = "white";
  }
}

// B) Instantiate a cat called 'boots' with the Cat class.
const boots = new Cat();
// C) What do you see when you console.log(boots)?
console.log(boots);
// all characteristics
// D) What if I want to output just boots' species?
console.log(boots.species);
