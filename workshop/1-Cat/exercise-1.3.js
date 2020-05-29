// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.

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
}

let boots = new Cat('Boots', 'Siamese', 3, 5, 2, 7);


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

boots.sleep();
boots.eat(10);
boots.play(1);

console.log(boots);