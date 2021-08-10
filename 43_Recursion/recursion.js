// let sum = 0;
// for (let i = 0; i <= 10; ++i) {
// sum = sum + 1;
// }

// console.log(sum);

function printNumber(number) {
  if (number > 10) return;
  console.log(number);
  printNumber(number + 1);
  // stop the execution right here
  console.log('exiting function');
}

printNumber(1);

console.log('end');

function sumNumberBelow(number) {
  if (number <= 0) return 0;
  return number + sumNumberBelow(number - 1);
}

console.log(sumNumberBelow(10));

// Exercise

// Convert the iterative while loop into a recursive function

const person = {
  name: 'Blaze',
  friend: {
    name: 'Joe',
    friend: {
      name: 'Sally',
    },
  },
};

let currentPerson = person;
while (currentPerson != null) {
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend;
}

function printNames(person) {
  if (person == null) return;
  console.log(person.name);
  printNames(person.friend);
}

printNames(person);

//
