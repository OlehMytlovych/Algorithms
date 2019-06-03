/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
 */


function sumPrimes(num) {
    let primes = [];

    for (let i = 2; i <= num; i++){//check 1 < i <= num 
        let flag = true;
        for (let j = 2; j < i; j++){// divide i by j to check if i is prime, 1 < j < i 
            if (i % j == 0) {
                flag = false;//if i is divided by any of j - it's not prime
                break
            }
        }

        if (flag) primes.push(i)// if i s not prime (flag = false), don't push
    } 
    return primes.reduce((a, b) => a + b);
  }
  
  console.log(sumPrimes(977));