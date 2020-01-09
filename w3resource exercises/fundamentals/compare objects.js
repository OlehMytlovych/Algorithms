//  Write a JavaScript program to compare two objects to determine
// if the first one contains equivalent property values to the second one.

const compareObjects = (obj1, obj2) => {
  


  for ( let property in obj1) {
    if (obj1.hasOwnProperty(property)) {
      if (!obj2.hasOwnProperty(property) || (obj1[property] !== obj2[property])) return false
    }
  }

  for ( let property in obj2) {
    if (obj2.hasOwnProperty(property)) {
      if (!obj1.hasOwnProperty(property) || (obj1[property] !== obj2[property])) return false
    }
  }

  return true
}

const obj1 = {
  name: 'oleh',
  age: 22
}

const obj2 = {
  name: 'oleh',
  age: 22,
  pet: 'fish'
}

console.log(compareObjects(obj1, obj2))
// using different methods
  /* const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]); */