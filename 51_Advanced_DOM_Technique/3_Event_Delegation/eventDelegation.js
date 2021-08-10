const buttons = document.querySelectorAll('button');

// document.body.addEventListener(
//   'click',
//   () => {
//     console.log('Clicked Document');
//   }
//   //   { capture: true }
// );

// document.body.addEventListener(
//   'click',
//   () => {
//     console.log('Clicked Body');
//   }
//   //   { capture: true } // capture object
// );
// // this another property is a set of options

// buttons.forEach((button) => {
//   button.addEventListener(
//     'click',
//     (e) => {
//       e.stopPropagation();
//       console.log('Clicked Button');
//     }
//     // { capture: true }
//   );
// });

// Delegation essentially means that your events get delegated to all differet events that gets clicked
// Capturing - from the farthest away thing to the closest thing
// Bubbling - from the closest thing to the farthest away thing

document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    console.log('Clicked Button');
  }
});
// 'matches' is the function that takes any css selector, it returns true if it matches the selector else returns false

const newButton = document.createElement('button');
newButton.innerText = 'Button 5';
document.body.append(newButton);
// When you're dynamically adding elements to your page, just make sure they always work by just adding an event listener on the document waiting for to bubble up to the document and checking to see if it matches the specific element that you're looking for and then run your event listener
