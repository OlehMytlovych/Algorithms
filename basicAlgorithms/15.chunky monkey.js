/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 *  and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    let brokenArr = [];

    let i = 0;
    while (i < arr.length){
        ((i+size) > arr.length) ? brokenArr.push(arr.slice(i)):brokenArr.push(arr.slice(i, i+size))
        i = i+size
    }

    return brokenArr
  }
  // you'd better look for the result in the console this time
  document.write(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

  /*
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]. 
  
  */