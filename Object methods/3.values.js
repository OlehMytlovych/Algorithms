Object.values = function(obj) {
  let values = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop])
    }
  }

  return values
}

var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj));  // виводить ['bar', 42]

// масив як об'єкт
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj));  // виводить ['a', 'b', 'c']

// масив як об'єкт з випадковим порядком ключів
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj));  // виводить ['b', 'c', 'a']