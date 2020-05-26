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

class cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = "cat";
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }

    // sleep method
    sleep = (hours) => {
        this.tiredness -= hours * 5;
        this.happiness += 50 - this.tiredness;
    };
    // eat method
    eating = (food) => {
        this.hunger -= food / 5;
        this.happiness += 50 - this.hunger;
    };
    // play method
    playing = (minutes) => {
        this.loneliness -= minutes * 3;
        this.happiness += 30 - this.loneliness;
    };
    // wait method
    wait = (minutes) => {
        this.tiredness += minutes * 1;
        this.hunger += minutes * 2;
        this.loneliness += minutes * 3;
        this.happiness -= minutes * 4;
    };
}

let boots = new cat("Boots", "Siamese");

boots.tiredness = 50;
boots.hunger = 25;
boots.loneliness = 75;

boots.sleep(1);
boots.eating(30);
boots.playing(15);

console.log(boots);

// B) Make Boots wait 20 minutes and call then console.log(boots);


boots.wait(20);

