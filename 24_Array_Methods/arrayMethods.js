/* essentially Method is a funtion on a object or something else 
while funtion is its own standalone function */

function abc() {
  // this funtion is called funtion coz its standalone on it own
}

const obj = {
  xyz() {
    // this function would be called method coz its inside of an object
  },
};

// Array Methods

// forEach
const a = [1, 2, 3, 4, 5];

console.log(a[0]);

a.forEach((number, index) => {
  console.log(number + ' ' + index);
});

/* forEach allows us to loop through all the elements in an array and just do whatever we want. 
it doesn't return anything */

// map
const b = [1, 2, 3, 4, 5];
const c = [2, 4, 6, 8, 10];

const newB = b.map((number) => {
  return number * 2;
});

console.log(newB);

/* we can mofify the elements in an array using a map 
and its going to return to us a brand new array that contain these different elements */

// filter

const d = [1, 2, 3, 4, 5];
const e = [1, 2];

const newD = d.filter((number) => {
  return number < 2;
});

console.log(newD);

/* filter loops through all of the different elements
and it allows to filer down our list into a new list that only contains the elements we want */

// find

const f = [1, 2, 3, 4, 5];
const g = [1, 2];

const n = f.find((number) => {
  return number > 2;
});

console.log(n);

// as soon as the condition is true it returns the element

// some

const h = [1, 2, 3, 4, 5];
const i = [1, 2];

const isTrue = h.some((number) => {
  return number > 2;
});

console.log(isTrue);

// if any of the elements in an array is matching this function then it returns true otherwise false

// every

const j = [1, 2, 3, 4, 5];
const k = [1, 2];

const isTrueEvery = j.every((number) => {
  return number > 2;
});

console.log(isTrueEvery);

// if every elements in an array is matching this function then it returns true otherwise false

// reduce

const l = [1, 2, 3, 4, 5];
const m = [1, 2];

const s = l.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(s);

// reducing an array to a one singlular value by looping through it and doing something each time

// Exercise

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 1 },
  { price: 6 },
];

const total = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(total);

//

// includes

const o = [1, 2, 3, 4, 5];
const p = [1, 2];

const isTrueIncludes = o.includes(2);

console.log(isTrueIncludes);

// includes checks if the value exists in the array
