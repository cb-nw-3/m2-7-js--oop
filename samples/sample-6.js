class Dog {
  constructor() {
    this.hunger = 0;
    // this.food = {amount: 1}; // An error was produced since this should have been coded.
  }

  remaining = () => {
    console.log(this.food.amount);
  };
}

let fido = new Dog();
fido.remaining();
