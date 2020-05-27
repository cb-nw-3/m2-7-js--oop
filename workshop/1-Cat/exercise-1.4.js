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
  constructor(x, y) {
    this.species = "cat";
    this.style = "flashy";
    this.loneliness = 0;
    this.tiredness = 50;
    this.hunger = 25;
    this.happiness = 0;
    this.color = "white";
    this.breed = y;
    this.name = x;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 1;
  };
  eat = (kibblesserving) => {
    this.hunger -= kibblesserving / 5;
    this.happiness += kibblesserving / 10;
  };
  play = (minutes) => {
    this.loneliness -= minutes * 5;
    this.happiness += minutes * 3;
  };
  wait = (minutes) => {
    this.tiredeness += minutes * 2;
    this.hunger += minutes * 4;
    this.loneliness += minutes * 3;
    this.happiness -= minutes * 3;
  };
}

const boots = new Cat("Boots", "Siamese");

boots.sleep(10);
boots.eat(6);
boots.play(60);
boots.wait(20);

console.log(boots);
