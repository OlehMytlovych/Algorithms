function isBigEnough(element, index, array) { 
    return element >= 10; 
  } 
  
 /*  [12, 5, 8, 130, 44].every(isBigEnough);   // false 
  [12, 54, 18, 130, 44].every(isBigEnough); // true */

Array.prototype.every = function(callback, thisArg = this) {

  for (let i = 0; i < thisArg.length; i++) {
    if (!callback(thisArg[i], i, array = thisArg)) {
      return false
    }
  }
  return true
}

let arr1 = [12, 5, 8, 130, 44]
console.log(arr1.every(isBigEnough));
let arr2 = [12, 54, 18, 130, 44]
console.log(arr2.every(isBigEnough));
