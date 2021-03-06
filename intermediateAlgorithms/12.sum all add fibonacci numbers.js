/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is
 the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.*/

function sumFibs(num) {
    let fibonacciNums = [0, 1];
        
    for (let i = 1; fibonacciNums[i] < num; i++){
        let currentNum = fibonacciNums[i] + fibonacciNums[i-1];
        if (currentNum <= num) fibonacciNums.push(currentNum);
    }

    let sum = fibonacciNums.filter(num => num%2 !=0).reduce((a,b) => a+b);

    return sum;
  }
  
  console.log(sumFibs(75025));


/*sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.*/

function raisePower(num, power) {
	if (power === undefined ) {
		return num;
	} else if (power === 0) {
		return 1;
    } else {
		return num * raisePower(num, power - 1);
	}
}

console.log(raisePower(2, 2))

function getFibonacci(num) {
  const fibonacciNums = [0, 1];

  for (let i = 1; i <= num; i++) {
    fibonacciNums.push(fibonacciNums[i] + fibonacciNums[i-1]);
  }

  return fibonacciNums
}

console.log(getFibonacci(10))