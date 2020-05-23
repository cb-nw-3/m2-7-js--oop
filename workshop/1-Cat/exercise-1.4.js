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

//add new method 'wait'
//'wait' accepts number of minutes as parameter
//the cat tiredness, hunger and loneliness increase as the amount increses
//become less happy
//make boots wait 20 minutes (for test 3 secondes)
//console.log(boots)

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.hunger = 0;
    this.species = "cat";
    this.tiredness = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }

  wait = (paramNumOfMinutes) => {
    this.tiredness = this.tiredness - paramNumOfMinutes;
    this.hunger = this.hunger - paramNumOfMinutes;
    this.loneliness = this.loneliness - paramNumOfMinutes;
    this.happiness = this.happiness - paramNumOfMinutes;
  };

  sleep = (paramHours) => {
    this.happiness = this.happiness + 40;
    this.tiredness = this.tiredness + 5 * paramHours;
  };

  eat = (paramKibble) => {
    this.happiness = this.happiness - 20;
    this.hunger = this.hunger + (1 / 5) * paramKibble;
  };

  play = (paramMinutes) => {
    this.happiness = this.happiness + 30;
    this.loneliness = this.loneliness + 3 * paramMinutes;
  };
}

let boots = new Cat("Lexie", "Cuty");

setInterval(function () {
  /// call your function here
  boots.wait(3);
  console.log(boots);
}, 5000);
//control + c to stop
