console.log(sum(1, 2));
console.log(sumArrow(1, 2));

function sum(a, b) {
  return a + b;
}

// JS takes all of the functions and moves them at the very top
// this process is called hoisting
// Hoisitng doesn't work with arrow functions

let sumArrow = (a, b) => {
  return a + b;
};

// coz arrow functions are defined as a variable and variables never get hoisted
