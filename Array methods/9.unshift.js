let array1 = [1, 2, 3];

//console.log(array1.unshift(4, 5));
// expected output: 5

//console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


Array.prototype.unshift = function(...items) {
  let newArr = [];

  for (let i = 0; i < items.length; i++) {
    newArr[newArr.length] = items[i]
  }
  for (let i = 0; i < this.length; i++) {
    newArr[newArr.length] = this[i]
  }
  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i]
  }

  return this.length
}

console.log(array1.unshift(4, 5));
console.log(array1);