var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];


// Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.concat = function(...items) {
  let newArr = [...this];

  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === 'object') {
      for (let j = 0; j < items[i].length; j++) {
        newArr.push(items[i][j])
      }
    } else {
      newArr.push(items[i])
    }
  }

  return newArr
}
var numbers = num1.concat(num2, num3);

console.log(numbers);
console.log(num1)
