/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2". */

function palindrome(str) {
    //1.
    let regExp = /[^a-z0-9]/gi,
    reversedStr,
    bool = true;

    str  = str.toLowerCase();
    str = str.replace(regExp, '')//delete all the non-alphanumerical chars
    str = str.split('');

    reversedStr = [].concat(str);//use concat not to mutate ths str
    reversedStr.reverse()

    reversedStr.forEach((element, index, array) => {
        if(element != str[index]) {
            bool = false
            return bool
        }
        
    });
    return bool

    //2. this one performs better
    /*
    //assign a front and a back pointer
      let front = 0
      let back = str.length - 1

      //back and front pointers won't always meet in the middle, so use (back > front)
      while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
          front++
          continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
          back--
          continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back-- 
    }

    //if the whole string has been compared without returning false, it's a palindrome!
    return true*/
  }
  
  
  
  console.log(palindrome("0_2 (: /-\ :) 22"));

  /*
  palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false. */