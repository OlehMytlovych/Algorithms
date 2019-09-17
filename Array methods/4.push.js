let animals = ['pigs', 'goats', 'sheep'];

//console.log(animals.push('cows'));
// expected output: 4

//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

//animals.push('chickens');

//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

Array.prototype.push = function (...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i]
  }

  return this.length
} 

console.log(animals.push('cows'));
console.log(animals);
animals.push('chickens');
console.log(animals);
