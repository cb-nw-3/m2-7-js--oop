// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

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

//rewrite Cat class
//add functions to the Cat class
//write methods that will update tiredness, hunger, loneliness and happiness
//-------eat method --> accept number of kibbles so there should be as parameters
//-------sleep method --> accept hours so there should be as parameters
//-------play method --> accept minutes so there should be as parameters
//-------happiness property is the this.happiness
//consol.log boots

//proprety is like variable
//method is like function

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

  sleep = (paramHours) => {
    this.happiness = this.happiness + 40;
    this.tiredness = this.tiredness + 5 * paramHours;
  };

  eat = (paramKibble) => {
    this.happiness = this.happiness - 20;
    this.hunger = this.hunger + (1 / 5) * paramKibble;
  };

  play = (paramMinutes) => {
    this.happiness = this.happiness + 30;
    this.loneliness = this.loneliness + 3 * paramMinutes;
  };
}

let boots = new Cat("Lexie", "Cuty");

boots.eat(100);
boots.play(100);
boots.sleep(100);

console.log(boots);
