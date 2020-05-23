class Fridge {
  constructor() {
    this.contents = [];
  }

  addItem = (item) => {
    this.contents.push(item);
  };

  getAllCalories = () => {
    let totalCalories = 0;

    this.contents.forEach((item) => {
      totalCalories += item.calories;
    });

    return totalCalories;
  };
}

let myFridge = new Fridge();

// add these elements to the contents array with the class method addItem
myFridge.addItem({
  name: 'milk',
  calories: 700,
});
myFridge.addItem({
  name: 'eggs',
  calories: 200,
});
myFridge.addItem({
  name: 'kale',
  calories: 100,
});

console.log(myFridge.getAllCalories()); // 1000
