// essentially a way of converting one type of variable into another type

let a = '1';
let b = '2.3';
let c = 1.34;

console.log(a);
console.log(typeof a);

console.log(parseInt(a));
console.log(typeof parseInt(a));

console.log(parseInt(b));
console.log(parseFloat(b));

console.log(c.toString());
console.log(typeof c.toString());

let x = 1;
const y = 'Hello';
let z = 2;

console.log(y + x);

// '+' always converts the number to a string
// '==' also converts the two values to the same type
// '-' is going to convert string to a number

console.log(x == y);
console.log(x - y);
console.log(z - x);
