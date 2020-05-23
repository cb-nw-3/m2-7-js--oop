class Student {
  constructor() {
    this.excitement = 1;
  }

  writeCode = () => {
    this.learn();
  };
}

let bob = new Student();
bob.writeCode(); // undefined function, learn() is not initialized
