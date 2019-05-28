function repeatStringNumTimes(str, num) {
    // 1. using recursion
    if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
   
   // 2.
   // return num > 0 ? str.repeat(num) : '';
    
    
   // 3. while loop 
  /*  let arr = [];
    while(num > 0){
        arr.push(str);
        num--
    }

    return arr.join('');*/
  }
  
  document.write(repeatStringNumTimes("abc", 3));