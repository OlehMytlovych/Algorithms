/* Write a JavaScript program to find the area of a triangle */
const a = 5;
const b = 6;
const c = 7;

const halfPer = (a+b+c)/2;
const area = Math.sqrt(halfPer*(halfPer-a)*(halfPer-b)*(halfPer-c));

console.log(`if a = 5, b = 6, c = 7 then area = ${area}`)