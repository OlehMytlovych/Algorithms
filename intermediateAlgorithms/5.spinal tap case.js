//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let regEx = /\s+|_+/g;

    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.replace(regEx,'-').toLowerCase();
    

    return str;
    //return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  }
  
  //document.write(spinalCase('This Is Spinal _Tap'));
  console.log(spinalCase('ThisIs Spinal_Tap'))

  /**
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
   */