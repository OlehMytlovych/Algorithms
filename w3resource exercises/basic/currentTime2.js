/* Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

const now = new Date();
const dayInitial = now.getDate();
const monthInitial = now.getMonth()+1;
const year = now.getFullYear();

const day = dayInitial < 10 ? `0${dayInitial}` : dayInitial ;
const month = monthInitial < 10 ? `0${monthInitial}` : monthInitial ;


console.log(`${month}-${day}-${year}`)
console.log(`${month}/${day}/${year}`)
console.log(`${day}-${month}-${year}`)
console.log(`${day}/${month}/${year}`)