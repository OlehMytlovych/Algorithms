var array1 = [1, 2, 'a', '1a'];

/* console.log(array1.toString());
// expected output: "1,2,a,1a"
console.log(array1) */

Array.prototype.toString = function() {
  let stringified = '';

  for (let i = 0; i < this.length; i++) {
    if (i !== this.length - 1) {
      stringified += this[i] + ','  
    } else {
      stringified += this[i]
    } 
  }

  return stringified
}

console.log(array1.toString());
console.log(array1)