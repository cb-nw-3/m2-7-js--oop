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
  constructor(initialName, breed, waitingTime) {
    this.name = initialName;
    this.breed = breed;
    this.species = 'cat';
    this.tiredness = 10;
    this.hunger = 10;
    this.loneliness = 10;
    this.happiness = 10;
  }
  eat() {
    this.hunger -= 5;
    this.happiness += 5;
  }
  sleep() {
    this.tiredness -= 5;
    this.happiness += 5;
  }
  play() {
    this.loneliness -= 5;
    this.happiness += 5;
  }
  wait(waitingTime) {
    this.tiredness += waitingTime * 0.2;
    this.loneliness += waitingTime * 0.2;
    this.hunger += waitingTime * 0.2;
    this.happiness -= waitingTime * 0.6;
  }
}

// B) Make Boots wait 20 minutes and call then console.log(boots);
boots = new Cat();

boots.eat();
boots.sleep();
boots.play();
boots.wait(20);

console.log(boots)