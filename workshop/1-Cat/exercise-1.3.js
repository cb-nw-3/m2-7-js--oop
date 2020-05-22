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
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  species = "cat";
  tiredness = 50;
  hunger = 50;
  loneliness = 50;
  happiness = 50;

  sleep = (hours) => {
    let totalRest = 5 * hours;
    let tempTiredness = this.tiredness - totalRest;
    this.tiredness = tempTiredness < 0 ? 0 : tempTiredness;
    this.happiness = this.happiness + 1 > 100 ? 100 : this.happiness + 1;
  };

  eat = (kibbles) => {
    let kibblesEffect = kibbles * 0.2;
    let tempHunger = this.hunger - kibblesEffect;
    this.hunger = tempHunger < 0 ? 0 : tempHunger;
    this.happiness = this.happiness + 1 > 100 ? 100 : this.happiness + 1;
  };

  play = (minutes) => {
    let playEffect = minutes * 3;
    let tempLoneliness = this.loneliness - playEffect;
    this.loneliness = tempLoneliness < 0 ? 0 : tempLoneliness;
    this.happiness = this.happiness + 1 > 100 ? 100 : this.happiness + 1;
  };
}

let jonSnow = new Cat("Jon Snow", "Dire Cat");
console.log(jonSnow);

jonSnow.sleep(5);
jonSnow.eat(50);
jonSnow.play(10);

console.log(jonSnow);
