class Student {
  constructor() {
    this.excitement = 1;
  }
  // we added a 'learn' function due to the missing function/error console we were getting
  learn = () => {
    this.excitement += 1;
  }
  writeCode = () => {
    this.learn();
  };
}
let bob = new Student();
bob.writeCode();
console.log(bob);
// When we console log it now we can see the following
// Student {
//   learn: [Function: learn],
//   writeCode: [Function: writeCode],
//   excitement: 2
