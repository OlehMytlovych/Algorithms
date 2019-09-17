let a = [2, 9, 9]; 
/* a.indexOf(2); // 0 
a.indexOf(7); // -1 */

Array.prototype.indexOf = function(item, searchFrom = 0) {
  for (let i = searchFrom; i < this.length; i++) {
    if (this[i] === item) {
      return i
    }
  }

  return -1
}

console.log(a.indexOf(2));
console.log(a.indexOf(7)); 