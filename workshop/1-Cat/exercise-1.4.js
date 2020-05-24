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
        this.species = 'cat';
        this.tiredness = 50;
        this.hunger = 10;
        this.loneliness = 10;
        this.happiness = 100;
    }

    // sleep = (hours) => {
    //     this.tiredness -= hours * 5;
    //     this.happiness += hours * 3;
    // };

    // eat = (times) => {
    //     this.happiness += (times * 1) / 2;
    //     this.hunger -= (times * 1) / 5;
    // };

    // play = (min) => {
    //     this.tiredness += min * 5;
    //     this.happiness += min * 5;
    //     this.loneliness -= min * 3;
    // };

    wait = (min) => {
        this.tiredness += min * 1.5;
        this.hunger += min * 0.5;
        this.loneliness += min * 1;
        this.happiness -= min * 2;
    };
}

let boots = new Cat('Boots', 'Simaese');

boots.wait(20);

console.log(boots);
