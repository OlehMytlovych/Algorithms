/**
 * You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
 */
function frankenSplice(arr1, arr2, n) {
    
    // 2. with the help of slice() - doesn't change the arr2 array
    let result = arr2.slice(0,n) + ',' + arr1 + ',' + arr2.slice(n);

    // 2. with the help of splice() - changes the arrSec array
   // let arrSec = arr2;
   // let result = arrSec.splice(0,n) + ',' + arr1 + ',' + arrSec;
    
    //not changed in both cases
    console.log(arr1);
    console.log(arr2);
    
    return result;
   
  }
  
  document.write(frankenSplice([1, 2], ["a", "b"], 1));




/*frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.*/