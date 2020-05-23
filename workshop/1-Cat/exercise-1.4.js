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

	wait = (mins) => {
		this.tiredness += mins * 0.5;
		this.hunger += mins * 0.2;
		this.loneliness += mins * 0.5;
		this.happiness -= mins * 1.5;
	};

	sleep = (hours) => {
		this.tiredness -= hours * 5;
		this.happiness += hours * 2;
	};

	eat = (numOfKibbles) => {
		this.hunger -= (numOfKibbles * 1) / 5;
		this.happiness += (numOfKibbles * 1) / 2;
	};

	play = (mins) => {
		this.loneliness -= mins * 3;
		this.happiness += mins * 2;
	};
}

const boots = new Cat("Boots", "Siamese");

boots.wait(20);
boots.sleep(10);
boots.eat(100);
boots.play(20);

console.log(boots);
