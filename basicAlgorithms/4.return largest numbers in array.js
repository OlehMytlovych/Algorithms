function largestOfFour(arr) {
    
    let arrLarge = arr,
        arrSmall = [];
    
    //1. simple for loops
    arrSmall.length = arrLarge.length;
    for (let i = 0; i < arrSmall.length; i++){
        arrSmall[i] = -Infinity;
    }
        
    for (let i = 0; i < arrLarge.length; i++){
        for (let j = 0; j < arrLarge[i].length; j++){
            if(arrLarge[i][j] > arrSmall[i]){
                arrSmall[i] = arrLarge[i][j];
            }
        }
    }

    //2. using reduce
    /*for (let i = 0; i < arrLarge.length; i++){
        arrSmall.push(arrLarge[i].reduce((number, nextNumber) => {
            if (number > nextNumber){
                return number;
            } else{
                return nextNumber;
            }
        }))
    }*/
    
    return arrSmall;

    //3. using map and reduce
    /*return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });*/
  }
  
  document.write(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));