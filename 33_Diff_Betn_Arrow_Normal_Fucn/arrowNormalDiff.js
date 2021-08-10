const button = document.querySelector('button');

console.log(this === window); // always equal to the window object when we are in the global scope
/* 'this' just represents essesntially the scope that you are inside of, the current scope */

button.addEventListener('click', (e) => {
  console.log('Arrow This');
  console.log(this);
});
/* Arrow function behaves with normal scoping rule, it is declared in global scope
while 'this' is equal to the window which means it is going to be the same as outside of where that function is defined */

button.addEventListener('click', function (e) {
  console.log('Function This');
  console.log(this);
});
/* the 'this' keyword is actually defined based on where the function itself is called,
and because of that this function is called inside this 'button' because we setup that event listner on the button,
so this function when the button is fired is actually fired from the button itself    
'this' is equal to the 'button' coz it is fired from the 'button' */

// recommended to use 'e.target' inside of Normal function instead of 'this' because they are going to be exactly the same thing
