// Declare a generic class for humans
class Human {
  constructor() {
    this.species = 'Homo Sapien';
  }
  dance = () => {
    console.log('disco time');
  };
}

class Male extends Human{
  constructor(initialName) {
    super();
    this.name = initialName;
  }
}

// Create a bob object that is a HUMAN MALE
let bob = new Male('Bob');

// Validation
console.log('1. Species: ', bob.species);
console.log('2. name: ', bob.name);
bob.dance();
