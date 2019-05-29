//Un-curried function
function unCurried(x, y) {
    return x + y;
  }
  
  //Curried function
  function curried(x) {
    return function(y) {
      return function(z){
          return x+y+z
      }
    }
  }
  console.log(curried(10)(20)(30)) // Returns 60