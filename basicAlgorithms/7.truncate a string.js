/*TASK
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.*/

function truncateString(str, num) {
    if (str.length <= num){
        return str;
    } else{
        return str = `${str.split('').splice(0, num).join('')}...`;//splice is an array method
    }
    
  }
  
  document.write(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

  /*truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
 should return "A-tisket a-tasket A green and yellow basket". */