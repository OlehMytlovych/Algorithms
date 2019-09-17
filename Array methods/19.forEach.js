var array1 = ['a', 'b', 'c'];

/* array1.forEach(function(element) {
  console.log(element);
});
 */
// expected output: "a"
// expected output: "b"
// expected output: "c"

Array.prototype.forEach = function(callback, thisArg = this) {
  for (let i = 0; i < thisArg.length; i++) {
    callback(this[i], i, array = thisArg)
  }
}

array1.forEach(function(element) {
    console.log(element);
});

