var array1 = [1, 4, 9, 16];

// pass a function to map
/* const map1 = array1.map(x => x * 2);

console.log(map1); */
// expected output: Array [2, 8, 18, 32]

Array.prototype.map = function(callback, thisArg = this) {
  let mappedArr = [];
   
  for (let i = 0; i < thisArg.length; i++) {
    mappedArr.push(callback(this[i], i, array = thisArg))
  }

  return mappedArr
}

const map1 = array1.map(x => x * 2);

console.log(map1);

