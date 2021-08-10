function sum(a, b) {
  return a + b;
}

let sumArrow = (a, b) => {
  return a + b;
};

// Can also write it as:

let sumArrow1 = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sumArrow(1, 2));
console.log(sumArrow);
console.log(sumArrow1(1, 2));

// Exercise

function printName(name) {
  console.log(name);
}

let printNameArrow = (name) => {
  // parenthesis are optional for single arguments
  console.log('Hello, my name is ' + name + '!');
};

printNameArrow('Blaze');

//

// Exercise 2

function printHi(name) {
  return 'Hi ' + name + '!';
}

let printHiArrow = (name) => 'Hi ' + name + '!';

console.log(printHi('Blaze'));
console.log(printHiArrow('Blaze'));

//

function hi() {
  console.log('Hi!');
}

let hiArrow = () => {
  console.log('Hi!');
};

hi();
hiArrow();

/* Bigger use of arrow function is for passing functions to other functions,
coz it allows you to write much less code */

function func(x, callback) {
  callback(x);
}

func(10, function (variable) {
  console.log(variable);
});

// is same as

func(10, (variable) => console.log(variable));
