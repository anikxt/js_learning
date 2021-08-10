const a = '1';

console.log(parseInt(a));
console.log(typeof parseInt(a));

const b = 'Hello';

console.log(parseInt(b));
console.log(typeof parseInt(b));
console.log(parseInt(b) == NaN);
console.log(parseInt(b) === NaN);

// NaN is never equal to anything

const c = parseInt('Hello');
console.log(c);
console.log(isNaN(c)); //

// isNaN returns true if it is not a number
