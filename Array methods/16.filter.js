let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/* const result = words.filter(word => word.length > 6);

console.log(result); */
// expected output: Array ["exuberant", "destruction", "present"]

Array.prototype.filter = function(callback, thisArg = this) {
  let filtered = [];

  for (let i = 0; i < thisArg.length; i++) {
    if (callback(this[i], i, array = thisArg)) {
      filtered.push(this[i])
    }
  }

  return filtered
}


const result = words.filter((word) => word.length > 6);

console.log(result);

