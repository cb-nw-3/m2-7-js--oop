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

class Cat {
  // Add code here
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    /*Above parameters 0 = none => good*/

    this.happiness = 0;
    /* happiness level goes from 0 to 100
  0 sadness cat in the world
  100 happiest cat in the world or more
  */
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += 50 - this.tiredness;
  };
  eat = (numberOfKibbles) => {
    this.hunger -= numberOfKibbles / 5;
    this.happiness += 50 - this.hunger;
  };
  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += 30 - this.loneliness;
  };
}

let boots = new Cat("Tom", "Simaese");

console.log(boots);

// Cat {
//   sleep: [Function: sleep],
//   eat: [Function: eat],
//   play: [Function: play],
//   name: 'Tom',
//   breed: 'Simaese',
//   species: 'cat',
//   tiredness: 0,
//   hunger: 0,
//   loneliness: 0,
//   happiness: 0
// }

boots.hunger = 50; // getting hungry
boots.loneliness = 15; // getting lonely
boots.tiredness = 20; // getting tired

boots.sleep(2);
console.log(boots);

// Cat {
//   sleep: [Function: sleep],
//   eat: [Function: eat],
//   play: [Function: play],
//   name: 'Tom',
//   breed: 'Simaese',
//   species: 'cat',
//   tiredness: 10,
//   hunger: 50,
//   loneliness: 15,
//   happiness: 40
// }

boots.eat(180);

console.log(boots);
// Cat {
//   sleep: [Function: sleep],
//   eat: [Function: eat],
//   play: [Function: play],
//   name: 'Tom',
//   breed: 'Simaese',
//   species: 'cat',
//   tiredness: 10,
//   hunger: 14,
//   loneliness: 15,
//   happiness: 76
// }

boots.play(2);

console.log(boots);

// Cat {
//   sleep: [Function: sleep],
//   eat: [Function: eat],
//   play: [Function: play],
//   name: 'Tom',
//   breed: 'Simaese',
//   species: 'cat',
//   tiredness: 10,
//   hunger: 14,
//   loneliness: 9,
//   happiness: 97
// }
