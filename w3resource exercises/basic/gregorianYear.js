/* Write a JavaScript program to determine whether a given year
 is a leap year in the Gregorian calendar. */

const now = new Date();
const year = 2020;
const isLeapYear = (year % 4 === 0) ? '' : ' not';

console.log(`${year} is${isLeapYear} a leap year`);