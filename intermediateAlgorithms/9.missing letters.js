/**
 * Find the missing letter in the passed letter range and return it.

 If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  //1.
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split('').slice(alphabet.indexOf(str[0])).join('');// now the alphabet's first character is str[0]

    for (let letter = 0; letter < str.length; letter++){
      if (str[letter] != alphabet[letter]) {
        return alphabet[letter]
      }
    }

    //2.
    /* for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    } */
  }
  
  document.write(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))

/*fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.*/