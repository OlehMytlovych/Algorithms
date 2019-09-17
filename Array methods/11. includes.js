var array1 = [1, 2, 3];

/* console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
 */
Array.prototype.includes = function(item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
        return true
    }
  }

  return false
}

console.log(array1.includes(2));
var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));