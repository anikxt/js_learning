const isUserLoggedIn = false;

// let welcomeMessage = '';

// if (isUserLoggedIn) {
//   welcomeMessage = 'welcome';
// } else {
//   welcomeMessage = 'please log in';
// }

const welcomeMessage = isUserLoggedIn ? 'welcome' : 'please log in';

isUserLoggedIn ? console.log('User logged in') : console.log('This is after');

// generally recommend not using ternary operator unless some specific cases like taking out boolean value 'true' or 'false'

console.log(welcomeMessage);
