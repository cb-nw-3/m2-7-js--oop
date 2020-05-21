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
  wait = (minutes) => {
    for (let i = 1; i <= minutes; i++) {
      setTimeout(() => {
        boots.hunger += 0.05;
        boots.loneliness += 0.15;
        boots.tiredness += 0.02;
        boots.happiness -= boots.hunger + boots.loneliness + boots.tiredness;
        console.log(
          `${i} minute(s) passed. ${
            boots.name
          }'s  Happiness level is ${boots.happiness.toFixed(
            2
          )}, loneliness: ${boots.loneliness.toFixed(
            2
          )}, hunger: ${boots.hunger.toFixed(
            2
          )}, tiredness: ${boots.tiredness.toFixed(2)}`
        );
      }, 1000 * i); // change 1000 for 60000 if you are willing to wait 20 minutes
    }
  };
}

let boots = new Cat("Tom", "Simaese");

boots.happiness = 60;
boots.wait(20);
