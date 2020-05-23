// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

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
  wait = (minutes) => {
    this.loneliness += minutes;
    this.happiness -= minutes;
    this.tiredness += minutes;
    this.hunger += minutes;
  };
}
let fussy = new Cat("Spot", "Cat", "Bengal", 50, 50, 50, 50);
console.log(fussy);
fussy.wait(5);
console.log(fussy);
