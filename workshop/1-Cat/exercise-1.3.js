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

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

class Cat {

    constructor (initialName, initialSpecies, initialTiredness, initialHunger, initialLoneliness, initialHappines) {

      this.name = initialName;
      this.species = initialSpecies;
      this.tiredness = initialTiredness
      this.hunger = initialHunger;
      this.loneliness = initialLoneliness;
      this.happiness = initialHappines;
    



    }

    

    checkCatHappiness = () =>
    {

        
        if (this.tiredness > 100 || this.hunger > 100 || this.loneliness > 100)
        {
            this.happiness = false
            console.log ("cat is sad");
        }
        else
        {
            this.happiness = true
            console.log("cat is happy");
        }
    }

    sleep = (hours) => {
        this.tiredness = this.tiredness - (hours*5);
        if (this.tiredness < 0) { this.tiredness = 0 }
        console.log(`${this.name} is sleeping for ${hours} hours.`);
        this.checkCatHappiness()

    };

    eat = (kibblesBits) => {
        var toReduce = kibblesBits * 0.2;
        this.hunger = this.hunger - toReduce;
        if (this.hunger < 0) { this.hunger = 0 }
        this.checkCatHappiness()


    } 

    play = (minutes) => {
        this.loneliness = this.loneliness - (minutes*3);
        if (this.loneliness < 0) { this.loneliness = 0 }
        this.checkCatHappiness()

    }
    
  // Add code here
}

var boots = new Cat(initialName='boots', initialSpecies='Siamese', initialTiredness=300, initialHunger= 20, initialLoneliness=20, initialHappines=false);
console.log(boots);
console.log(boots.species);
boots.checkCatHappiness();
boots.sleep(300);