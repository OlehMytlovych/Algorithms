/**
 Compare two arrays and return a new array with any items only found in one of the two given arrays, 
 but not both. In other words, return the symmetric difference of the two arrays.
 */

function diffArray(arr1, arr2) {
    //1. for loop
    var newArr = [];
    
    for (let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) == -1) newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1) newArr.push(arr2[i])
    }

    return newArr
    //2. using methods
 /*return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)//if one of the arrays doesn't include the function returns false
        )*/
  }
  
  document.write(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

  /**
   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
   */