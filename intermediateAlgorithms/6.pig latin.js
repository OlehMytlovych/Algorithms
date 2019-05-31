//Translate the provided string to pig latin.

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

//If a word begins with a vowel you just add "way" to the end.

//Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    const consonantsEX = /^[^aeuio]+/i;
          vowelsEx = /^[aeuio]/i,
          suffix = "ay";
    
    if (!str.match(/[aeuio]/g)) return str + suffix;//in case there are no vowels in the str

    if (!!str.match(consonantsEX)) {
        suffix = str.match(consonantsEX) + suffix;//create suffix
        str = str + suffix;//add the suffix
        str = str.replace(str.match(consonantsEX), '')//remove the letters from the beginning
    } else {
        str = str + 'w' + suffix;//add the suffix if the string starts with a vowel
    }
    return str;
  }
  
  console.log(translatePigLatin("tham"));


  /**
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
   */