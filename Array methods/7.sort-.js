var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

Array.prototype.sort = function (callback) {
  if (callback) {
    /* let sortedArr = []

    for (let i = 0; i < this.length; i++) {
      for 
      if (callback(this[i]))
    } */
  } else {
    
  }
}