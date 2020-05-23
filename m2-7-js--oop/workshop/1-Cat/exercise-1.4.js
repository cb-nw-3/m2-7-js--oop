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
    constructor(breed, name){
      this.species = 'cat';
      this.name = '';
      this.breed = breed;
      this.name = name;
      this.tiredness = 0;
      this.hunger = 0;
      this.loneliness = 0;
      this.happiness = 0;
    }
    sleep = (hours) => {
        this.tiredness = this.tiredness - (5 * hours);
        this.happiness = this.happiness + 5;
    };
    eat = (kibble) =>{
        this.hunger = this.hunger - (kibble * .20);
        this.happiness = this.happiness + 10;
    };
    play = (minutes) =>{
        this.lonliness = this.lonliness - (minutes * 3);
        this.happiness = this.happiness + 15;
    };
    wait = (seconds) => {
        
        this.tiredness = this.tiredness + 1;
        this.hunger = this.hunger + 1;
        this.loneliness = this.loneliness + 1;
        this.happiness = this.happiness -1;
    };

}
let boots = new Cat('tabby', 'boots');

let interval = setInterval(function() {
    boots.wait(1)
  }, 1000);
 
