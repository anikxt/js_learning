let name = 'Blaze';
const age = 20;
const favouriteNumber = 16;

let person = {
  name: 'Blaze',
  age: 20,
  favouriteNumber: 3,
  sayHi: function () {
    console.log('Hi');
  },
  sayHi2() {
    // You dont have to write the function keyword for the function inside the object
    console.log('Hi');
  },
  property: 'Value',
};

console.log(person.name);
console.log(person.favouriteNumber);

console.log(console);

person.sayHi();

// Exercise

// Create an object called 'car' with the properties
// 1. Make
// 2. Model
// 3. isUsed
// Add a function called makeNoise logs out Vroom

let car = {
  make: 'Nissan',
  model: '370Z',
  isUsed: true,
  makeNoise() {
    console.log('Vroom');
  },
};

console.log(car.isUsed);
console.log(car['isUsed']); // Not Recommended

const property = 'make';

console.log(car[property]);

//

// objects inside of other objects -

let personX = {
  name: 'Blaze',
  hobbies: ['Weight Lifting', 'Programming'],
  address: {
    street: '12345 Main Street',
    city: 'Somewhere',
  },
};

console.log(personX.hobbies.street);
console.log(typeof personX);

// Exercise

// Create an object called 'book' with the following properties
// 1. Title - string
// 2. Author - object with the properties name and age

let book = {
  title: 'Moon Child',
  author: {
    name: 'Blaze',
    age: 20,
  },
};

console.log(book.title);

book.title = 'New Title';

console.log(book.title);

book.author.name = 'New Name';

console.log(book.author.name);

let hobbies = [1, 2];
hobbies[0] = 3;

console.log(hobbies);

// Arrays

// Arrays and objects - colletion of linked together variables
// Array is a list of variables
// while an object is a collection of variables where you have a name and a value
