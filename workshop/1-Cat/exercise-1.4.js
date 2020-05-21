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
    constructor(initialTimer) {
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 50;
        this.timer = initialTimer * 100;
    }

    // does this need an actual setInterval?
    // I mean... why? Can't we just determine the number of iterations?

    updateValues = (timer) => {
        for (let i = 0; i < timer; i++) {

        }
    }

}
