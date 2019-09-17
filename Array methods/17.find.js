var array1 = [5, 12, 8, 130, 44];

/* var found = array1.find(function(element) {
  return element > 10;
});

console.log(found); */
// expected output: 12

Array.prototype.find = function(callback, thisArg = this) {
  for (let i = 0; i < thisArg.length; i++) {
    if (callback(this[i], i, array = thisArg)) {
      return this[i]
    }
  }
}

var found = array1.find(function(element) {
    return element > 10;
  });
  
  console.log(found);