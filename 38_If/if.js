const userIsLoggedIn = true;
// console.log('User is logged in');
// console.log('Please login');
const isOnDashboard = true;

if (userIsLoggedIn) {
  console.log('User is logged in');
  console.log('This is another login');
} else {
  console.log('This is false');
}

if (userIsLoggedIn && isOnDashboard) {
  console.log('Working');
}

if (0) {
  console.log('true');
} else {
  console.log('false');
}

console.log('' == false);

let totalPrice = 0;

if (totalPrice == null) {
  console.log('true');
} else {
  console.log('false');
}

/* If you're checking for null or undefined, make sure to explicitly do the check instead of using the implicit conversion from JS coz that could just make things confusing */

totalPrice = 5;

if (totalPrice == null) {
  console.log('there is no total price');
} else if (totalPrice < 10) {
  console.log('this is preety cheap');
} else if (totalPrice < 50) {
  console.log('this is not too bad');
} else {
  console.log('this is expensive');
}

// Exercise

// Create a variable that contains an array.
// Using an if statement with else if I want you to check the length of the array
// If it is empty print out 'empty'
// If it has less than 5 elements print out 'small'
// If it has less than 10 elements print out 'medium'
// Otherwise print out 'large'

const arr = [1, 2];

if (arr.length == 0) {
  console.log('empty');
} else if (arr.length < 5) {
  console.log('small');
} else if (arr.length < 10) {
  console.log('medium');
} else {
  console.log('large');
}

//
