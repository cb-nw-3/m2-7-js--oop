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
  constructor(name, breed) {
    this.species = "cat";
    this.breed = breed;
    this.name = name;
    this.tiredness = 30;
    this.hunger = 30;
    this.loneliness = 30;
    this.happiness = 30;
  }
}

sleep = (hours) => {
  this.tiredness -= hours * 5;
  this.happiness -= hours * 10;
};

eat = (food) => {
  this.hunger -= (food * 1) / 5;
  this.happiness -= (food * 1) / 15;
};

play = (minutes) => {
  this.loneliness -= minutes * 3;
  this.happiness -= minutes * 6;
};

wait = (minutes) => {
  this.tiredness += minutes * 4;
  this.hunger += minutes * 6;
  this.loneliness += minutes * 2;
  this.happiness -= minutes * 4;
};
const boots = new Cat("boots", "siamese");

// boots.wait(1);

console.log(boots);
