class Dog {
  constructor() {
    this.hunger = 0;
    // bottom part was missing for the program to succeed!!!
    this.food = { amount: 1};
  }

  remaining = () => {
    console.log(this.food.amount);
  };
}

let fido = new Dog();
fido.remaining();
