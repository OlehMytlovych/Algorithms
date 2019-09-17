let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

//console.log(plants.pop());
// expected output: "tomato"

//console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

//plants.pop();

//console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

Array.prototype.pop = function () {
  let lastItem = this[this.length - 1];
  this.length = this.length - 1;
  
  return lastItem
}

console.log(plants.pop())
console.log(plants)