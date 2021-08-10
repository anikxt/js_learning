// Using data attributes inside of JS in order to add information and read information from elements

// const test = document.querySelector('[data-test');

// console.log(test.dataset);

// console.log(test.dataset.test);

// console.log(test.dataset.testTwo);
// // accessing individual attributes

// test.dataset.test = '5555';
// // change the data attribute value

const buttonElement = document.querySelectorAll('[data-clicks]');

buttonElement.forEach((button) => {
  button.addEventListener('click', () => {
    const currentClicks = parseInt(button.dataset.clicks);
    button.dataset.clicks = currentClicks + 1;
  });
});
