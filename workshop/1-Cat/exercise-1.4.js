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

    constructor (initialName, initialSpecies, initialTiredness, initialHunger, initialLoneliness, initialHappines) {

      this.name = initialName;
      this.species = initialSpecies;
      this.tiredness = initialTiredness
      this.hunger = initialHunger;
      this.loneliness = initialLoneliness;
      this.happiness = initialHappines;
    
    }


    wait = (secondsToWait) =>
    {
        let timePassing = setInterval(
            () => {
              console.log('time passing');
              this.tiredness += 10;
              this.hunger += 10;
              this.loneliness += 10;
              this.happiness += 10; 
              this.checkCatHappiness()
             
            },
            1000
        )

        let timeDone = setTimeout(
           () => {
               console.log("done");
               clearInterval(timePassing)
               clearInterval(timeDone)
               this.checkCatHappiness()

            },
           secondsToWait * 1000 

        )
  
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

var boots = new Cat(initialName='boots', initialSpecies='Siamese', initialTiredness=20, initialHunger= 20, initialLoneliness=20, initialHappines=true);
console.log(boots);
console.log(boots.species);
//boots.checkCatHappiness();
//boots.sleep(300);
boots.wait(12);