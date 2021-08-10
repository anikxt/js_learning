/* change the flow of your code using asynchronous code
setTimeOut function and addEventListener function both are asynchronous */

setTimeout(() => {
  console.log('inside');
}, 1000);

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   console.log('clicked');
// });

console.log('outside'); // it is synchronous
// which means it runs in the order it is defined

// This type of asynchronous code are what you are going to refer as callback
/* A callback is essentially a function that you pass to another function in order to be executed at a later time based on some specific condition
whether execute after a specific amount of time, whether executes it when an event occur or whether executes based on outside things such as getting data from a url or database or some other means */

const button = document.querySelector('button');
button.addClickEventListener(button, () => {
  console.log('clicked');
});

function addClickEventListener(element, callback) {
  element.addEventListener('click', callback);
}

setTimeout(() => {
  console.log('inside');
  setTimeout(() => {
    console.log('inside 2');
    setTimeout(() => {
      console.log('inside 3');
    }, 100);
  }, 100);
}, 100);
// Callback hell

/* const button = document.querySelector('button');
addClickEventListener(button, callback);

function addClickEventListener(element, callback) {
  element.addEventListener('click', callback);
}

function callback()
{ console.log('callback called')} */
