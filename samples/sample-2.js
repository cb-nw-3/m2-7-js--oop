class FourSided {
  constructor(name) {
    this.numSides = 4;
    this.name = name;
  }
  area() {
    return this.height * this.width;
  }
}

class Square extends FourSided {
  constructor(size) {
    super('square'); //this is forcing the hard value from line 2, it's calling the funtion using name = 'square'.
    this.height = size;
    this.width = size;
  }
}

let mySquare = new Square(4);
console.log(mySquare.name); // square
console.log(mySquare.area()); // "16"
