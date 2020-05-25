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
  constructor(name,breed) {
    this.name = name;
    this.breed = breed;
    this.species = 'cat';
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 100;
  }

  wait = (minutes) => {
    this.tiredness += minutes*0.5;
    this.hunger += minutes*0.1;
    this.loneliness += minutes*0.3;
    this.happiness -= 0.15*minutes;
  }

  sleep = (hoursSlept) => {
    this.tiredness -= 5*hoursSlept;
    this.happiness += 4*hoursSlept;
  }

  eatKibbles = (kibblesQuantity) => {
    this.hunger -= (kibblesQuantity/5);
    this.happiness += 2*kibblesQuantity;
  }

  play = (timePlayed) => {
    this.loneliness -= 3*timePlayed;
    this.happiness += 5*timePlayed
  }


}


let newCat = new Cat('Boots', 'Siamese');

// B) Make Boots wait 20 minutes and call then console.log(boots);

//start off with a cat at 100 happiness and 0 everything else, after 20 mins
//we get this

newCat.wait(20);
console.log(newCat);
