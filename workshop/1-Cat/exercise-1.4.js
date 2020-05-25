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
    constructor(name, breed){
        this.species = 'cat';
        this.name = name;
        this.breed = breed;
        this.hunger = 50;
        this.happinness = 50;
        this.lonelyness = 50;
        this.tiredness = 50;
        this.bityness = "bites a lot"
    }

    sleep = (numOfHours) => {
        this.tiredness = this.tiredness - (10*numOfHours)
        if(this.tiredness <= 0){
            this.tiredness = 0
        }
        this.happinness += (2*numOfHours)
    }

    eat = (numberOfKibbles) => {
        this.hunger = this.hunger - (numberOfKibbles/5);
        this.happinness += numberOfKibbles;
    }

    play = (number) => {
        this.lonelyness = this.lonelyness - (3*number)
        this.happinness += (2*number)
    }

    wait = (minutes) => {
        this.hunger += (minutes/5)
        this.tiredness += minutes
        this.lonelyness += (minutes/2)
        this.happinness -= (minutes/5)
    }
}

let boots = new Cat ('boots', 'Calico')

boots.wait(20)
console.log(boots)