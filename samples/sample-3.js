class Student {
  constructor() {
    this.excitement = 0;
  }

  learn = () => {
    this.excitement = this.excitement + 5;
  };

  writeCode = () => {
    this.learn();
  };
}

let bob = new Student();
bob.writeCode();
