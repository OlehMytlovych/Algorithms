const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


Array.prototype.reduce = function(callback, initialValue) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(accumulator = initialValue || this[0])
  }


}