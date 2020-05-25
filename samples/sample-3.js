class Student {
  constructor() {
    this.excitement = 0;
  }

  learn = () => {
    this.excitement = this.excitement + 5;
    //console.log(`my level is at ${this.excitement}`);
  };

  writeCode = () => {
    this.learn();
    //console.log(`my level is at ${this.excitement}`);
  };
}

let bob = new Student();
bob.writeCode();

console.log(bob);
//bob.learn();


