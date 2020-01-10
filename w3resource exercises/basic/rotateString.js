/* Write a JavaScript program to rotate the string 'w3resource' 
in right direction by periodically removing one letter from the end of
 the string and attaching it to the front. */

let string = 'w3resource ';
const p = document.createElement('p');
p.innerHTML = string;
document.body.appendChild(p);

setInterval(() => {
  const arr = string.split('');
  const lastLetter = arr.pop();
  arr.unshift(lastLetter);
  string = arr.join('');
  p.innerHTML = string;
}, 150);