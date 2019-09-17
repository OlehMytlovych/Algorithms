let array1 = ['one', 'two', 'three'];
//console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

//let reversed = array1.reverse(); 
//console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
//console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']

Array.prototype.reverse = function () {
  let reversed = [];

  for (let i = this.length-1; i >= 0; i--) {
    reversed[reversed.length] = this[i]
  }

  for (let j = 0; j < reversed.length; j++) {
    this[j] = reversed[j]
  }

  return this
}

console.log('array1: ', array1);
let reversed = array1.reverse(); 
console.log('reversed: ', reversed); 
console.log('array1: ', array1);