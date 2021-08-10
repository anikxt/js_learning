function sayHi() {
  console.log('Hello');
  console.log('bye');
}

sayHi();

// Exercise

function sayName() {
  console.log('Hello! my name is Blaze');
}

sayName();
sayName();

//

function sum(a, b) {
  console.log(a + b);
}

sum(1, 2);

let x = 2;
let y = 2;

sum(x, y);
sum(8, y);

// Exercise 2

// Create a function that takes one argument (a print's name) and prints that out

function printName(name, age) {
  console.log('Hello! my name is ' + name + ' and my age is ' + age);
}

printName('Blaze');

//

printName(); // pass the default argument as undefined

function multiply(a, b) {
  return a * b;
}

let multiply1 = multiply(1, 2);
let multiply2 = multiply(2, multiply1);

console.log(multiply1);
console.log(multiply2);

// Exercise 3

/* Create a function one argument (name),
 it will return that name added to the end of the string 'Hello!' */

function concatenate(name) {
  return 'Hello ' + name + '!';
  console.log('This will never run!');
}

let result = concatenate('World');

console.log(result);
