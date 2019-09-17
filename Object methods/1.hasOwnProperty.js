const object1 = new Object();
object1.property1 = 42;

//console.log(object1.hasOwnProperty('property1'));
// expected output: true

//console.log(object1.hasOwnProperty('toString'));
// expected output: false

//console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

Object.prototype.hasOwnProperty = function(prop) {
  for (let property in this) {
    if (property === prop) {
      return true
    } 
  }

  return false
}

console.log(object1.hasOwnProperty('property1'));
console.log(object1.hasOwnProperty('toString'));
console.log(object1.hasOwnProperty('hasOwnProperty'));