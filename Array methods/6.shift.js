let a = [1, 2, 3];
a.shift();

//console.log(a); // [2, 3]

Array.prototype.shift = function () {
  let firstItem = this[0]

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i+1]
  }
  
  return firstItem
}

console.log(a)