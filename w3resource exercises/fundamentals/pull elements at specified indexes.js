const pull_at_Index = (arr, indexes) => {
  let extracted = [];
  
  indexes.forEach((index) => extracted.push(arr[index]))
  let filtered = arr.filter((element, index) => indexes.indexOf(index) === -1)

  return `extracted: ${extracted}, filtered: ${filtered}`
}

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));