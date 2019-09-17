/*
we are going to create a function to emulate a data structure called a "Set". 
A Set is like an array, but it cannot contain duplicate values. The typical
 use for a Set is to simply check for the presence of an item.  */

function Set() {
    // the var collection will hold our set
    let collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    this.add = function(element) {
        if (this.has(element)) {
            return false
        } else {
            collection.push(element);
            return true
        }
    }
    this.remove = function(element) {
        if (this.has(element)) {
            collection.splice(collection.indexOf(element), 1)
            return true
        } else {
            return false
        }
    }
    this.size = function() {
        return collection.length
    }
    this.union = function(arr) {
        
        for (let element of arr) {
            if (collection.indexOf(element) === -1){
                collection.push(element)
            } 
        }
        return collection
    }
    this.intersection = function(arr) {
        let intersectionArr = [];
        for (let element of arr) {
            if (collection.indexOf(element) !== -1){
                intersectionArr.push(element)
            } 
        }
        return intersectionArr
    }
    this.difference = function(arr) {
        let different = [];

        collection.forEach(item =>{
            if (arr.indexOf(item) === -1) different.push(item)
        })

        return different
    }
    this.subset = function(arr) {
        return collection.every(item => arr.indexOf(item) !== -1)
    }
    // change code above this line
}
let original = new Set()
original.add(3)
original.add(4)
original.add(9)
//console.log(original.values())
//console.log(original.union([10,11,12,3]))
//console.log(original.values())
//console.log(original.intersection([10,5,7,3]))
//console.log(original.difference([10,3]))
console.log(original.values())
console.log(original.subset([6,4,6,9]))