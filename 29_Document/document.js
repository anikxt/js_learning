// document object

console.log(document);

console.log(document.body);

console.log(document.documentElement);

const element = document.createElement('span');
element.innerText = 'Hello World!';
document.body.appendChild(element);

// document allows us to get document from out HTML,allows us to modify our HTML,create new elements to add into our HTML, adding events
