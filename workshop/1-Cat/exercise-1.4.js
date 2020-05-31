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
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }

  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 5;
  };
  eat = (kibbles) => {
    this.hunger -= kibbles * 0.2;
    this.happiness += kibbles * 3;
  };
  play = (minutes) => {
    this.loneliness -= 3 * minutes;
    this.happiness += minutes * 4;
  };
  wait = (minutes) => {
    this.tiredness += 3 * minutes;
    this.hunger += 3 * minutes;
    this.loneliness += 1 * minutes;
    this.happiness -= 5 * minutes;
  };
}

const boots = new Cat("Boots", "Siamese");
boots.wait(20);

console.log(boots);

// Cat {
//     sleep: [Function: sleep],
//     eat: [Function: eat],
//     play: [Function: play],
//     wait: [Function: wait],
//     species: 'cat',
//     tiredness: 60,
//     hunger: 60,
//     loneliness: 20,
//     happiness: -100,
//     name: 'Boots',
//     breed: 'Siamese'
//   }
