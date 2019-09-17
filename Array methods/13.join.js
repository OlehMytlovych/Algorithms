var elements = ['Fire', 'Air', 'Water'];

/* console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
console.log(elements) */

Array.prototype.join = function(joiner = ',') {
  let string = '';

  for (let i = 0; i < this.length; i++) {
    if (i !== this.length-1) {
      string += this[i] + joiner   
    } else {
      string += this[i]
    }
   
  }

  return string
}

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));
console.log(elements)