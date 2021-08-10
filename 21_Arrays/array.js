const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);
console.log(a[0]);

a.push(11);

// push just adds an element to the end of your list

console.log(a);

a.push('hi');

console.log(a);

a.push(['Hi', 'Bye']);

// You can put an array inside an another array

console.log(a);

const c = [
  ['Yo', 'Boi'],
  [0, 1],
];

const b = [c, [1, 2]];

console.log(b);

console.log(b[0][0][0]);

// Exercise

/* Create an array with the first 5 letters of the alphabet
 and then print out the middle element in the array (c) */

const x = ['a', 'b', 'c', 'd', 'e'];

console.log(x[2]);

//

// Exercise 2

const y = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

// print out 4, 8, 11

console.log(y[0][3]);
console.log(y[1][2]);
console.log(y[2][0]);

console.log(a);
console.log(a.length);

// length checks the length of the array

//
