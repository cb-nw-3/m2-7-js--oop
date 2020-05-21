// 1. Given this class, how would we represent its hunger level?
// 2. How could we represent varying hunger levels based on activity?
// 3. How about when it eats?
class Animal {
  constructor() {
    this.hungryLevel = 0;
  }
  activity = (amount) => (this.hungryLevel += amount * 0.25);
  eat = (amount) => (this.hungryLevel -= amount * 0.35);
}
