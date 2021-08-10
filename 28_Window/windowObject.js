console.log(window);

// is same as

window.console.log('Hi!');

alert('Yo');

window.alert('Yay');

const alert = 'message';

// window.alert('Heya!'); // It won't work now

window.addEventListener('resize', () => {
  console.log('resized');
});

/* You can skip using 'window' if you wish,
javasript is clever enough to identify that you are running the script in the browser */
