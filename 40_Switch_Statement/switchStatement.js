const favouriteAnimal = 'cow';

// if (favouriteAnimal === 'cat') {
//   console.log('cats are pretty cool');
// } else if (favouriteAnimal === 'dog') {
//   console.log('they are kinda loud');
// } else if (favouriteAnimal === 'shark') {
//   console.log('this is an interesting choice');
// } else {
//   console.log('that is cool but I am unfamiliar with that animal');
// }

switch (favouriteAnimal) {
  case 'cat':
    console.log('cats are pretty cool');
    break;
  case 'dog':
    console.log('they are kinda loud');
    break;
  case 'shark':
    console.log('this is an interesting choice');
    break;
  default:
    console.log('that is cool but I am unfamiliar with that animal');
}

// Exercise

const number = 2;

// Create a switch that checks to see the value of the number variable
// If the number is 0 print out 'it is zero'
// If the number is 1 or 2 print out 'it is small'
// If the number is 3 or 4 print out 'it is medium'
// If the number is 5 print out 'it is large'
// If the number is none of these print out 'try again'

switch (number) {
  case 0:
    console.log('it is zero');
    break;
  case 1:
  case 2:
    console.log('it is small');
    break;
  case 3:
  case 4:
    console.log('it is medium');
    break;
  case 5:
    console.log('it is large');
    break;
  default:
    console.log('try again');
}

//
