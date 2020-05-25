// 1. Given this class, how would we represent its hunger level?
// 2. How could we represent varying hunger levels based on activity?
// 3. How about when it eats?
class Animal {

  //Give initial hunger state as a number between 1 - 100
  constructor(h) {
    this.hunger = h;
  }

  hungerState = () => {
    if(this.hunger >= 50) {
      console.log(`Level is at ${this.hunger}, im hungry`);
    } else {
      console.log(`Level is at ${this.hunger}, im better`);
    }
  }


  eat = () => {
    this.hunger -= 10;
  }
}

let bunny = new Animal(55);
bunny.hungerState();
bunny.eat();
bunny.hungerState();