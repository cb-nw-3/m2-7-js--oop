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
	// Add code here
	constructor(name, breed) {
		this.species = "cat";
		this.name = name;
		this.breed = breed;
		this.tiredness = 75;
		this.hunger = 75;
		this.loneliness = 75;
		this.happiness = 75;
    }
    
    sleep = (hours) => {
        this.tiredness -= hours * 5;
        this.happiness += hours * 2;
    }

    eat = (numOfKibbles) => {
        this.hunger -= (numOfKibbles * 1) / 5;
        this.happiness += (numOfKibbles * 1) / 2;
    }

    play = (mins) => {
        this.loneliness -= mins * 3;
        this.happiness += mins * 2;
    }
}

const boots = new Cat("Boots", "Siamese");

// console.log(boots);

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

boots.sleep(10);
boots.eat(100);
boots.play(20);

console.log(boots);