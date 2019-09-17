

Object.keys = function(obj) {
  let keys = [];

  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      keys.push(property)    
    }
  }

  return obj.length
}

var arr = [2,1,2];
console.log(Object.keys(arr));  // виводить ['0', '1', '2']

// масив як об'єкт
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));  // виводить ['0', '1', '2']

// масив як об'єкт з випадковим порядком ключів
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj));  // виводить ['2', '7', '100']