const printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(printOddNumbers(numbers)); 

const toTitleCaps = (arr) => arr.map(str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));

const stringArray = ['hello', 'world', 'this', 'is', 'a', 'test'];
console.log(toTitleCaps(stringArray)); 

const sumOfNumbers = (arr) => arr.reduce((sum, num) => sum + num, 0);


const numbersArray = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numbersArray)); 
