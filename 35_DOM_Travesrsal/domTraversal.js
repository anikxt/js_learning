// *** id is on grand-parent

// const grandParent = document.querySelector('#grand-parent');

// // grandParent.style.color = 'red';

// console.log(grandParent.children);

// grandParent.children[0].style.color = 'red';

// const parentOne = grandParent.children[0];
// const parentTwo = parentOne.nextElementSibling;
// const childOne = parentOne.children[0];
// const childTwo = parentOne.children[1];

// childOne.style.color = 'red';
// childTwo.style.color = 'red';

// *** id is on child-one

// const childOne = document.querySelector('#child-one');

// childOne.style.color = 'red';

// const parentOne = childOne.parentElement;

// parentOne.style.color = 'red';

// const grandParent = parentOne.parentElement;

// *** go straight to grand parent

// const childOne = document.querySelector('#child-one');
// const grandParent = childOne.closest('.grand-parent');

// what 'closest' does it works very similar to 'querySelector' except for instead for selecting elements that are children, what it does is it selects that are parents

// grandParent.style.color = 'green';

// 'closest' just selects the closest one, the closest parent, the first parent

// *** acesssing children having the class of 'child'

const grandParent = document.querySelector('#grand-parent');
const children = grandParent.querySelectorAll('.child');
const parent = grandParent.querySelector('.red');
parent.style.color = 'green';

// in this case, 'querySelecor' works exactly the same but instead of looking at it from the document, it looks at it from the actual element that we are on, in our case the grand parent.

children.forEach((child) => (child.style.color = 'red'));
