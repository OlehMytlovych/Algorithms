/* Write a JavaScript program where the program takes a random integer between 1 to 10,
 the user is then prompted to input a guess number. If the user input matches with guess number,
 the program will display a message "Good Work" otherwise display a message "Not matched". */

const min = 1;
const max = 10;
let won = 0;
let lost = 0;

for (let i = 0; i < 10; i++) {
  let random = (Math.random() * (max-min)) + min;
  random = random.toFixed();

  const entered = prompt(`READ MY MIND, ENTER A NUMBER FROM 1 TO 10
  You won: ${won} times
  You lost: ${lost} times`, '');
  
  if (random === entered) {
    won++;
  } else {
    lost++;
  }
}