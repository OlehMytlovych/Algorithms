//TASK
//Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target) {
    //1. of corse .endsWith() method
    //str = str.endsWith(target);
    //return str

    //2. .slice() method
    //return str.slice(str.length - target.length) === target;

    //3. usual for loop
    let flag = false;
    //start comparing only if target is shorter, else - false
    //compare from the last char till the first of the target
    for ( let i = target.length-1, j = str.length-1; target.length < str.length && i >= 0; i--, j--){
        if (target[i] == str[j]) { 
            flag = true;
        } else {
            flag = false
            break
        }
    }


    return flag;
  }
  
  document.write(confirmEnding("Congratulatio !n", "o !n"));


/*confirmEnding("Bastian", "n") should return true.
confirmEnding("Congratulation", "on") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.*/