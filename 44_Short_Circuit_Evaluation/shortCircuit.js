console.log(true || true);

function printTrue() {
  console.log('true');
  return true;
}

function printFalse() {
  console.log('false');
  return false;
}

printTrue() || printFalse();

printFalse() || printTrue();

printFalse && printTrue();

// Use case for 'or' '||'

// function printName(name) {
//   if (name == null) {
//     name = 'Default';
//   }
//   console.log(name);
// }

// printName();

function printNameCircuit(name) {
  name = name || 'Default';
  console.log(name);
}

printNameCircuit();

// Use case for 'and' '&&'

const person = {
  name: 'Blaze',
  address: {
    street: 'main st',
  },
};

// if (person != null && person.address != null) {
//   console.log(person.address.street);
// }

console.log(person && person.address && person.address.street);

/* So essentially if you need to deeply access a property inside of an object 
and you dont know if its going to exist or not, separating them by this '&&' symbols is a great way to do that
and its something you're going to see all the time in the JS code */