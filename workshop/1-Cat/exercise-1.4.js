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
    this.species = 'cat';
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 10;
    this.happiness += hours * 3;
  };

  eat = (mouse) => {
    this.hunger -= 100 * mouse;
    this.happiness += 200 * mouse;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 20;
    this.happiness += 200;
  };
  wait = (minutes) => {
    this.tiredness += minutes * 7;
    this.hunger += minutes * 3.3;
    this.loneliness += minutes * 0.005;
    this.happiness -= minutes * 0.063;
  };
}
// B) Make Boots wait 20 minutes and call then console.log(boots);

let boots = new Cat('Boots', 'Siamese');
boots.wait(20);
console.log(boots);
