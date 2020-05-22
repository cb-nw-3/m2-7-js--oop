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
    this.name = name;
    this.breed = breed;
  }

  species = "cat";
  tiredness = 50;
  hunger = 50;
  loneliness = 50;
  happiness = 50;

  sleep = (hours) => {
    let totalRest = 5 * hours;
    let tempTiredness = this.tiredness - totalRest;
    this.tiredness = tempTiredness < 0 ? 0 : tempTiredness;
    this.happiness = this.happiness + 1 > 100 ? 100 : this.happiness + 1;
  };

  eat = (kibbles) => {
    let kibblesEffect = kibbles * 0.2;
    let tempHunger = this.hunger - kibblesEffect;
    this.hunger = tempHunger < 0 ? 0 : tempHunger;
    this.happiness = this.happiness + 1 > 100 ? 100 : this.happiness + 1;
  };

  play = (minutes) => {
    let playEffect = minutes * 3;
    let tempLoneliness = this.loneliness - playEffect;
    this.loneliness = tempLoneliness < 0 ? 0 : tempLoneliness;
    this.happiness = this.happiness + 1 > 100 ? 100 : this.happiness + 1;
  };

  wait = (minutes) => {
    this.tiredness =
      this.tiredness + minutes > 100 ? 100 : this.tiredness + minutes;
    this.hunger = this.hunger + minutes > 100 ? 100 : this.hunger + minutes;
    this.loneliness =
      this.loneliness + minutes > 100 ? 100 : this.loneliness + minutes;
    this.happiness =
      this.happiness - minutes < 0 ? 0 : this.happiness - minutes;
  };
}

let boots = new Cat("Boots", "Simaese");
boots.wait(20);
console.log(boots);
