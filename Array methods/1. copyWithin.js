//Task
let array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

//my implementaition
Array.prototype.copyWithin = function (copyTo, copyFrom, copyTill = this.length) {
  let elementsToCopy = []
  for (copyFrom; copyFrom < copyTill; copyFrom++) {
   elementsToCopy.push(this[copyFrom]) 
  }

  let i = 0
  for (i, copyTo; i < elementsToCopy.length; i++, copyTo++) {
    this[copyTo] = elementsToCopy[i]
  }
  return this
}

console.log(array1.copyWithin(0,3,4))
console.log(array1.copyWithin(1,3))