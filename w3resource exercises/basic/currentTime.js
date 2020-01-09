/* Write a JavaScript program to display the current day
 and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const now = new Date();
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
const allHours = now.getHours();
const timeOfDay = allHours > 12 ? 'PM' : 'AM';
const hours = allHours > 12 ? allHours - 12 : allHours;
const minutes = now.getMinutes();
const seconds = now.getSeconds();


console.log(`Today is : ${weekDay}`);
console.log(`Current time is : ${hours} PM : ${minutes} : ${seconds}`);
