// Declare a generic class for humans
class Human {
  constructor() {
    this.species = 'Homo Sapien';
  }
  dance = () => {
    console.log('disco time');
  };
}

// Create a bob object that is a HUMAN MALE
let bob = new Male('Bob');

// Validation
console.log('1. Species: ', bob.species);
console.log('2. name: ', bob.name);
bob.dance();
