class Dog {
  constructor() {
    this.hunger = 0;
  }

  remaining = () => {
    console.log(this.food.amount);
  };
}

let fido = new Dog();
fido.remaining(); // food needs to be a property defined in the constructor
