  function reverseString(str) {
    
    return str = str.split("").reverse().join('');
    
    
    // or simple loop 
    /*let newStr = ''
    
    for (let i = str.length-1; i >= 0; i--){
     newStr += str[i];    
    }
    
    return newStr*/
  }
  
  document.write(reverseString("hello"));