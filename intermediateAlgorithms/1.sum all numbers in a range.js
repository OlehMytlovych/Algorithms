//TASK 
/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
 */

function sumAll(arr) {

    //1.
    /* let sorted = [].concat(arr).sort((a,b) => a - b);

    let expanded = [];
    let firstNum = sorted[0],
        lastNum = sorted[1];
    
    for (let number = firstNum; number <= lastNum; number++){
        expanded.push(number);
    }

    let addedNumb = expanded.reduce((a, b) => a + b);

    return addedNumb */

    //2. 
    let sorted = [].concat(arr).sort((a,b) => a - b);
     
    let sum = 0;
     
    for (let i = sorted[0]; i <= sorted[1]; i++){
      sum += i
    }
     
    return sum
    
  }
  
document.write(sumAll([4, 1]));