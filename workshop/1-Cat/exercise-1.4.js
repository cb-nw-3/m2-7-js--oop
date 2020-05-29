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
    constructor(name, species, tiredness, hunger, loneliness, happiness){
    this.name = name;
    this.species = species;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
    }

    sleep() {
        if((this.tiredness - 4) < 0) {
            this.tiredness = 0;
        } else {
            this.tiredness = this.tiredness - 4;
        }

        if((this.happiness + 2) >= 10) {
            this.happiness = 10;
        } else {
            this.happiness = this.happiness + 2;
        }
    }

    eat(kibbles) {
        if ((this.hunger - (kibbles / 5)) < 0) {
            this.hunger = 0;
        } else {
            this.hunger = this.hunger - (kibbles / 5);
        }

        
        if((this.happiness + 2) >= 10) {
            this.happiness = 10;
        } else {
            this.happiness = this.happiness + 2;
        }
    };

    play(min){
        if(this.loneliness - (3 * min) < 0){
            this.loneliness = 0;
        } else {
            this.loneliness = this.loneliness - (3 * min);
        }

        if((this.happiness + 2) >= 10) {
            this.happiness = 10;
        } else {
            this.happiness = this.happiness + 2;
        }
    };

    wait(min){
        if((this.hunger + (min/100)) >10){
            this.hunger = 10;
        } else {
            this.hunger = this.hunger + (min/100);
        }        

        if((this.loneliness + (min/100)) > 10) {
            this.loneliness = 10;
        } else {
            this.loneliness = this.loneliness + (min/100);
        }
        
        if((this.tiredness + (min/50)) > 10){
            this.tiredness = 10
        } else {
            this.tiredness = this.tiredness + (min/50);
        }

        if((this.happiness - (min/50)) < 0) {
            this.happiness = 0;
        } else {
            this.happiness = this.happiness - (min/50);
        }
    }
}

let boots = new Cat('Boots', 'Siamese', 3, 5, 2, 7);

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(2000);
console.log(boots);