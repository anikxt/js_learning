let a = 1;
let b = 2;
let c = 1;

console.log(a == b);
console.log(a == c);
console.log(!a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);

let m = 'a';
let n = 'b';

console.log(m == n);
console.log(m < n);
console.log(m <= n);

let i = true;
let j = false;

console.log(i == j);
console.log(i != j);

let x = null;
let y = undefined;

console.log(x == y);

// null and undefined kind of represent the exact same thing, they represent the lack of value, something that doesnot have any value
// lack of value == lack of value -> returns true

console.log(null == null);
console.log(undefined == undefined);
console.log(x != y);
