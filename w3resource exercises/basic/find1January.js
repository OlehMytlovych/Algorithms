/* Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050 */

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const range = [2014, 2050];
const saturdayIn = [];

for (let year = 2014; year <= 2050; year++) {
  const currentDate = new Date(year, 0, 1);
  const weekDayNumber = currentDate.getDay();

  if (week[weekDayNumber] === 'Saturday') {
    saturdayIn.push(year);
  }
}

console.log(`the 1st January was a Saturday in ${saturdayIn.join(', ')}`);