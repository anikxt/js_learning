// // data attributes preferred when selecting class with JS just that they don't clash with my CSS classes

// const btn = document.querySelector('[data-btn]');
// const input = document.querySelector('[data-input-text]');

// console.log(btn);

// function printClick() {
//   console.log('clicked');
// }

// // btn.addEventListener('click', () => {
// //   console.log('clicked');
// // });

// btn.addEventListener('click', printClick);

// // btn.removeEventListener('click', printClick);
// // removes an event listener

// // Event Object

// // btn.addEventListener('click', (e) => {
// //   console.log(e);
// // });

// // 'e' stands for 'event' as in event object

// input.addEventListener('change', () => {
//   console.log('changed');
// });
// // 'change' event occurs whenever the input changes and click off the input to go somewhere else

// input.addEventListener('input', () => {
//   console.log('input');
// });
// // if you want to run an event every single time you type a character we need to an event listener called 'input'

// input.addEventListener('input', (e) => {
//   console.log(e.target.value === '');
// });
// // checks if the target of our event (input, in this case) has a value or not

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submitted form');
});
// anytime we submit the form whether its clicking the submit button, enter inside a text box or whatever causes you to submit your form, this is going to run 'submit' event here

/* 'preventDefault' event takes no parameters
and it says that I see what your event is supposed to do but I don't want you to do that though, 
so prevent the default (submitting the form, in our case) and just do the code that I wrote instead */

// Exercise

// Add an anchor tag to the HTML and when it is clicked, prevent the default and log something to the console

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Prevented Default');
});

link.addEventListener('mouseenter', (e) => {
  e.preventDefault();
  console.log('Mouse Entered');
});

link.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  console.log('Mouse Left');
});

link.addEventListener('mouseover', (e) => {
  e.preventDefault();
  console.log('Mouse Over');
});

link.addEventListener('focus', (e) => {
  e.preventDefault();
  console.log('On-Focus');
});

link.addEventListener('blur', (e) => {
  e.preventDefault();
  console.log('Focus Left');
});

link.addEventListener('resize', (e) => {
  e.preventDefault();
  console.log('Resized');
});
