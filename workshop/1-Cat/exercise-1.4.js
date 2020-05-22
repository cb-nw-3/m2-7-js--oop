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
      this.breed = breed;
      this.name = name;
      this.tiredness = 50;
      this.hunger = 50;
      this.loneliness = 50;
      this.happiness = 50;
    }
  
    sleep = (hours) => {
      this.tiredness -= hours * 5;
      this.happiness += hours * 1;
    };
  
    eat = (kibblePieces) => {
        this.hunger -= (kibblePieces * 1) / 5;
        this.happiness += (kibblePieces * 1) / 5;
    };
  
    play = (minutes) => {
      this.loneliness -= minutes * 3;
      this.happiness += minutes * 5;
    };
  
    wait = (minutes) => {
      this.tiredness += minutes * 1;
      this.hunger += minutes * 2;
      this.loneliness += minutes * 1;
      this.happiness -= minutes * 2;
    };
  }
  
  const boots = new Cat('Boots', 'Siamese');

// B) Make Boots wait 20 minutes and call then console.log(boots);
boots.wait(20);

console.log(boots);
