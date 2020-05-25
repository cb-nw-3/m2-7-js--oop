class Student {
  constructor() {
    this.excitement = 1;
  }

  learn = () => {
    this.excitement = this.excitement + 5;
  };

  writeCode = () => {
    this.learn();
    console.log(this.excitement);
  };
}

let bob = new Student();
bob.writeCode();
