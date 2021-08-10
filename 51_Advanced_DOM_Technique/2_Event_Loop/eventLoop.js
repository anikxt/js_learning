// Main Thread where all of your JavaScript is ran
// Separate thread just wait till its done and then it plugs back in the main thread JS and it says run my callback for me

function test() {
  console.log('hi 1');
  console.log('hi 2');

  setTimeout(() => console.log('hi 3'), 10);
  setTimeout(() => console.log('hi 4'), 0);
  console.log('hi 5');
}

test();

console.log('hi 6');
// setTimeout cannot run until our entire call stack is complete
// Promises and async-await can run before the call stack is actually completely finished
// Instead of waiting for the entire call stack complete, all promise does is it wait until the currently running function is complete
