var globalArray = [5, 6, 3, 2, 9];//sort in ascending order without mutation
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArr = [].concat(arr);
  

  return newArr.sort((a, b) => {
      return a - b
    })
 
  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));