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

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;

    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    if (this.tiredness <= 0) {
      this.tiredness = 0;
    }
    this.happiness += 5;
  };

  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    if (this.hunger <= 0) {
      this.hunger = 0;
    }
    this.happiness += 3;
    this.tiredness += 5;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    if (this.loneliness <= 0) {
      this.loneliness = 0;
    }
    this.happiness += 8;
    this.tiredness += 20;
  };

  wait = (minutes) => {
    this.tiredness += minutes;
    this.hunger += minutes;
    this.loneliness += 2 * minutes;
    this.happiness -= 5 * minutes;
  };
}

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots = new Cat("Boots", "Siamese");
boots.wait(20);
console.log(boots);
