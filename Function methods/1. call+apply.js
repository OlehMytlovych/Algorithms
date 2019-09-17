Function.prototype.call = function(thisArg, ...args) {
  let newContext = thisArg;
  console.log(this)
  newContext.func = this;
  return newContext.func(...args)
}

function showProfileMessage(message1, message2) {
  console.log(message1, message2, this.name, this.surname);
 }
 const obj = {
  name: "Ankur",
  surname: "Anand"
 };
 showProfileMessage.call(obj, "welcome", "friend");

 