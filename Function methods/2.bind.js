Function.prototype.bind = function(thisArg, ...args) {
    let thisFunction = this

    return function() {
      let newContext = thisArg;
      newContext.func = thisFunction;
      return newContext.func.call(thisArg, ...args)
    }
}

function showProfileMessage(message1, message2) {
    console.log(message1, message2, this.name, this.surname);
}
const obj = {
  name: "Ankur",
  surname: "Anand"
};
const sayHi = showProfileMessage.bind(obj, "welcome", "friend");

