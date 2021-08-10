const dataAttributeElement = document.querySelector('[data-test]');
/* with querySelector we can select an element based on absolutely anything,
with querySelector it always selects one element and it always selects the very first one that it finds */
const divsWithClasses = document.querySelectorAll('.div-class');
// we get a NodeList which works similar to an array in case of querySelectorAll
const input = document.querySelector("body > input[type='text']");

console.log(dataAttributeElement);
console.log(divsWithClasses);

dataAttributeElement.style.color = 'green';
// Array.from(divsWithClasses); to convert it into an array
divsWithClasses.forEach((div) => (div.style.color = 'red'));
// In our case since forEach is a part of NodeList so we can directly use it

console.log(divsWithClasses);

console.log(input);
