var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

/* console.log(array1.findIndex(isLargeNumber)); */
// expected output: 3

Array.prototype.findIndex = function(callback, thisArg = this) {
  for (let i = 0; i < thisArg.length; i++) {
    if (callback(this[i], i, thisArg)) {
      return i
    }
  }
}


  console.log(array1.findIndex(isLargeNumber));