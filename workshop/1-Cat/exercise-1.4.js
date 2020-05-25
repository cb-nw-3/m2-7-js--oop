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
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += 10;
  };
  eat = (kibblesNum) => {
    this.hunger -= kibblesNum / 5;
    this.happiness += 8;
  };
  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += 5;
  };
  wait = (minutes) => {
    this.tiredness += minutes * 5;
    this.hunger += minutes * 3;
    this.loneliness += minutes * 7;
    this.happiness -= minutes;
  };
}

let boots = new Cat("Boots", "Siamaese");
console.log(boots);

// B) Make Boots wait 20 minutes and call then console.log(boots);
boots.wait(20);
console.log(boots);
//Boots looks like he's not doing good XD and needs some attention, desperately!!
