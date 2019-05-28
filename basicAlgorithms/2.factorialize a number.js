function factorialize(num) {
    
    if (isNaN(num) || num<0) {
        return "Enter a number > 0"
    } else if (num == 0){
        return 1
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
    /* or using recursion
    if (num === 0) {return 1} //1.we check if it's 0 and 2. this is where recursion ends.
    return num * factirialize(num - 1) 
    Steps of recursion:
    5 * (4 * (3 * (2 * (1 * (num===0 so) 1)))) when we reach last 1 we go back and actually multiply
    */
  }
  
  document.write(factorialize(5));