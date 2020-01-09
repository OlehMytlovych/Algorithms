const dig = (theObject, neededProperty) => {
  let result = null;
  for(let prop in theObject) {
    if(prop == neededProperty) {
      return theObject[prop];
    }
    
    if(theObject[prop] instanceof Object) {
      result = dig(theObject[prop], neededProperty);
      if (result) {
        break;
      }
    }
  }
  return result;
}

const data = {
  nothing: {},
  level1: {
    level2: {
      level3: 'level3'
    }
  },
  level11: {
    level12: {
      level13: 'level13'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level13'));
console.log(dig(dog, 'message'));