//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let flattened = []; 
    
    function flatten(arg){
        if (!Array.isArray(arg)){
            flattened.push(arg)
        } else {
            for (let a in arg){
                flatten(arg[a])
            }
        }
    }

    arr.forEach(flatten);
    return flattened;
  }
  
  console.log(steamrollArray([1, [], [3, [[4]]]]));

  /*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]. */