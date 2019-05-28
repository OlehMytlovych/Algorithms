/**TASK
 * Return the provided string with the first letter of each word capitalized.
 *  Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

function titleCase(str) {
    let words = str.toLowerCase().split(' ');

    //1. usual for loop
    //for ( let i = 0; i < words.length; i++){
      //  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    //}
    
    //2. .map() method
    words = words.map(function(elem) {
        return elem[0].toUpperCase() + elem.slice(1)
    })

    return words.join(' ');    
  }
  
  document.write(titleCase("I'm a little tea pot"));