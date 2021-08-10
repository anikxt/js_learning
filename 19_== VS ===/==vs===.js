const a = 1;
const b = '1';

console.log(a == b);
console.log(a === b); // compare these values but do not convert the type

const x = null;
const y = undefined;

console.log(x == y); // They are both the same in JS eyes
console.log(x === y); // technically different types
console.log(x !== y);

// Never do type coercion because it makes things too confusing
// >= <= you're always goig to deal with the same type and you don't have to worry about the type coercion
// just remember again to pretty much always use the '===' version unless unless checking for null or undefined
