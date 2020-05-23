// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

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

  eat = (kibbles) => {
    if (this.hunger < 30) {
      console.log(this.name + " is not hungry");
    } else {
      console.log(this.name + " is eating");
      this.hunger -= kibbles * 0.2;
      this.happiness += kibbles * 0.2;
    }
  };
  nap = (hours) => {
    if (this.tiredness < 80) {
      console.log(this.name + " is not tired");
    } else {
      console.log(this.name + " is taking a nap");
      this.tiredness -= hours * 5;
      this.happiness += hours * 5;
    }
  };
  play = (minutes) => {
    if (this.happiness > 80) {
      console.log(this.name + " does not want to play");
    } else {
      console.log(this.name + " is playing with a ball of string");
      this.loneliness -= 3 * minutes;
      this.happiness += 3 * minutes;
    }
  };
}
let boots = new Cat("shadow", "Simaese", "cat", 90, 40, 50, 60);
console.log("boots: ", boots);

boots.eat(20);

console.log("boots: ", boots);

boots.nap(3);

console.log("boots: ", boots);

boots.play(10);

console.log("boots: ", boots);

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
