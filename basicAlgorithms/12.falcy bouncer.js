/**TASK
 * Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {
    let correct = [];

    //1. with filter()
    //correct = arr.filter(Boolean)

     //2. with filter() - doesn't modify the arr array
    /*correct = arr.filter(function(item){
        return !!item
    })*/

    //3. for loop
    for ( let item of arr){
        if(item) correct.push(item)
    }
    
    return correct
}
  
  document.write(bouncer([7, "ate", "", 4, false, 9]));