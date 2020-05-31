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
    this.species = 'cat';
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }

  // Write a sleep method that accept hours as the parameter.
  sleep = (hours) => {
    // reduce tiredness by 5 times of that number
    this.tiredness -= hours * 5;
    this.happiness += hours * 5;
  };

  // Write an eat method that accept number of kibbles as the parameter.
  eat = (numOfKibbles) => {
    // reduce hunger by 1/5 of that number
    this.hunger -= (numOfKibbles * 1) / 5;
    this.happiness += (numOfKibbles * 1) / 5;
  };

  // Write an play method that accept minutes as the parameter.
  play = (minutes) => {
    // reduce loneliness by 3 times of that number
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 3;
  };

  // Write a wait method that accept a number of minutes as the parameter.
  wait = (numberOfMinutes) => {
    // tiredness, hunger, and loneliness should increase as the amount of time increases.
    this.tiredness += numberOfMinutes * 2;
    this.hunger += numberOfMinutes * 2;
    this.loneliness += numberOfMinutes * 2;
     // They should also become less happy.
    this.happiness -= numberOfMinutes * 0.5;
  };

}

let boots = new Cat('Boots', 'Simaese')

boots.sleep(5);
boots.eat(9);
boots.play(10);

// B) Make Boots wait 20 minutes and call then console.log(boots);
boots.wait(20);

console.log(boots);
