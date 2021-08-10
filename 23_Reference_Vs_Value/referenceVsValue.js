let a = 10;
let b = 'Hi';
let c = a;
c = c + 1;
let d = [1, 2]; // 0x01

console.log('a= ' + a);
console.log('b= ' + b);
console.log('c= ' + c);
console.log('d= ' + d);

let e = d; // copying the reference of the same memory location
// Now both 'd' and 'e' reference the exact same memory address

console.log('e= ' + e);
e.push(3); // any changes would reflects in the variable 'd' as well

console.log('d= ' + d);
console.log('e= ' + e);

// This idea of reference to a location is what called as references

/* we have value when where you store the actual value for eg. 10 or 'Hi'
and there is references which is what you do when you deal with the objects or arrays 
and it stores a reference to a location in the memory where the actual value of object or array is stored */

e = [3, 4, 5]; // 0x02 reference is stored in a different memory location
// any changes made would not reflect to variable 'd'

let x = { name: 'Blaze' }; // 0x03
let y = x; // 0x03
y.name = 'Joe';

console.log('x= ' + JSON.stringify(x));
console.log('y= ' + JSON.stringify(y));

/* JSON is an object called 'JSON' and it has function/property on that object called 'stringify'
where we just pass it an object and it will convert that object into a string version which we print on the screen */

const m = [1, 2]; // 0x010
// const means you cannot change the value which in this case is a memory location
let n = [1, 2]; // 0x011

console.log(m === n); // returns false
/* we're comaparing the value of these elements using '==' and '==='
and in this case 'm' and 'n' has a value which is a memory address */

m.push(3);

console.log('m= ' + m);
console.log('n= ' + n);

const t = { name: 'Blaze' }; // 0x04

// t = { name: 'Blaze', age: 25 }; // 0x05 throws an error

console.log('t=' + t);

const k = [1, 2]; // 0x00
const elementToAdd = 3; // 3

add(a, elementToAdd); // 0x01, 3

console.log(a);
console.log(elementToAdd);

function add(array, element) {
  element = element + 1; // 4
  array.push(element); // still references to 0x01
}
/* it's like,
const array = a; // they both references to the same memory location
 
/* 1.while dealing with arrays and dealing with objects, they are references 
whenever you're modifying an array or modifying an object you are modifying that reference 
and whenever you set something equal to currently existing object or array, you are using that reference. so they share the same reference.
2.while numbers, strings, booleans those are just values 
they never have references to anything. so its always just an individual value. for eg. they can never reference other numbers or other strings  */
