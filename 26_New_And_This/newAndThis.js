function createUser(name, age) {
  return { name: name, age: age, human: true };
}

const user = createUser('Blaze', 20);

console.log(user);

const date = new Date();
// when you are creating an object with the new keyword you call this '()' a constructor

console.log(date.getDay());

function User(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.human = true;
  // return this;
}

// this keyword essentially references the current object that you are trying to create.

/* It's generally best practice to use capital letters when you are writing out a constructor
essentially the type of the object that you repeatedly want to create. */

const userX = new User('Blaze', 20);
const userFunc = createUser('Blaze', 20);

console.log(userX);
console.log(userFunc);

// Alternative to constructor function is class which works exactly the same way
class UserN {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  printName() {
    console.log(this.name);
  }
}

const userY = new UserN('Blaze', 20);
const userZ = new UserN('Bucky', 28);
userY.printName();
userZ.printName();
