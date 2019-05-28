function findTheWord(str) {
    //let strArr = split(str, ' '); //uncomment to use my split function
    let strArr = str.split(' ')
    let word = '';
    
    //1. using for of loop
    for (let item of strArr){
        if(item.length > word.length) word = item;
    }


    //2. using reduce
    /*word = strArr.reduce((item, nextItem)=> {
        if (item.length > nextItem.length){
            return item
        } else {
            return nextItem
        }
    })*/

    //3. regular for loop 
    /*for (let i = 0; i < strArr.length; i++){///
        if (word.length < strArr[i].length){
            word = strArr[i]
        }
    }*/

    //4. using sort()
    //word = str.split(' ').sort((a, b)=>{return b.length-a.length})[0];

    return `The longest word is "${word}"(${word.length})`;
  }

  document.write(findTheWord("What if we try a super-long word such as otorhinolaryngology"));
 
  //uncomment to use my split function
  /*function split(string, char){
    let arr = [];
    string += char;
    let arrItem = '';

    for (let i = 0; i < string.length; i++){
        if (string[i] === char ){
            arr.push(arrItem)
            arrItem = ''
        } else {
            arrItem += string[i];
        }

    }

    return arr
  }*/

  