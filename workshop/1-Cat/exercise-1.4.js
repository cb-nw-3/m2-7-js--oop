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
    this.species = "cat";
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 50;
    this.happiness = 50;
  }

  sleep = (hours) => {
    this.tiredness = this.tiredness - 5 * hours;
    this.happiness = this.happiness + 5 * hours;
    console.log(this.tiredness, this.happiness);
  };

  eat = (kibbles) => {
    this.hunger = this.hunger - kibbles / 5;
    this.happiness = this.happiness + kibbles / 5;
    console.log(this.hunger, this.happiness);
  };

  play = (minutes) => {
    this.loneliness = this.loneliness - minutes * 3;
    this.happiness = this.happiness + minutes * 3;
    console.log(this.loneliness, this.happiness);
  };

  wait = (minutes) => {
    this.tiredness = this.tiredness + minutes * 0.1;
    this.hunger = this.hunger + minutes;
    this.loneliness = this.loneliness + minutes * 0.2;
    this.happiness = this.happiness - minutes * 0.3;
  };
}

// B) Make Boots wait 20 minutes and call then console.log(boots);
let boots = new Cat("Boots", "Siamese Cat");
boots.wait(20);
console.log(boots);
