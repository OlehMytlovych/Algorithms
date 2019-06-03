/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also
 evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {

    arr = arr.sort((a,b) => a - b);

    for (let smallestCommon = arr[1]; smallestCommon ; smallestCommon++){

        let flag 

        for (let number = arr[0]; number <= arr[1]; number++){
            if (smallestCommon % number != 0) {
                flag = false;
                break
            } else {
                flag = true;
            }
        }
        
        if (flag) return smallestCommon
        
    }
  }
  
  
  document.write(smallestCommons([1, 4]));