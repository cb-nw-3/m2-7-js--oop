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
    constructor() {
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 50;
    }

    updateValues = (timer) => {
        for (let i = 0; i < timer; i++) {
            this.tiredness -= 1;
            this.loneliness -= 2;
            this.hunger -= 2;
        }
        this.happiness = 100 - this.tiredness - this.loneliness - this.hunger;
    }

}

let boots = new Cat;

boots.updateValues(20);

console.log(boots);
