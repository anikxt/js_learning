// using async await to write promises in a different and cleaner way

function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

// setTimeoutPromise(250)
//   .then(() => {
//     console.log('1');
//     return setTimeoutPromise(250);
//   })
//   .then(() => {
//     console.log('2');
//   });
// in order to use async await, you need to be actualy inside the function and mark it as async function
// the idea of async await is to make your code look like synchronous code while actually being asynchoronous

async function doStuff() {
  await setTimeoutPromise(250);
  console.log('1');
  await setTimeoutPromise(250);
  console.log('2');
}

doStuff();

// resolve version
function setTimeoutPromiseX(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You waited ${delay} milliseconds`);
    }, delay);
  });
}
// instead of just calling 'resolve' we actually pass something to 'resolve'
// using async await, whatever result has inside of it is just a return value of async await execution of that promise

// setTimeoutPromiseX(250)
//   .then(() => {
//     console.log(message);
//     console.log('1');
//     return setTimeoutPromiseX(250);
//   })
//   .then(() => {
//     console.log(message);
//     console.log('2');
//   });

async function doStuffX() {
  const message = await setTimeoutPromiseX(250);
  console.log(message);
  console.log('1');
  const message2 = await setTimeoutPromiseX(250);
  console.log(message2);
  console.log('2');
}

doStuffX();

// reject version
function setTimeoutPromiseY(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error!');
    }, delay);
  });
}
// using async await, whatever result has inside of it is just a return value of async await execution of that promise

// setTimeoutPromiseY(250)
//   .then(() => {
//     console.log(message);
//     console.log('1');
//     return setTimeoutPromiseY(250);
//   })
//   .then(() => {
//     console.log(message);
//     console.log('2');
//   })
//   .catch((e) => {
//     console.error(e);
//   });

async function doStuffY() {
  try {
    const message = await setTimeoutPromiseY(250);
    console.log(message);
    console.log('1');
    const message2 = await setTimeoutPromiseY(250);
    console.log(message2);
    console.log('2');
  } catch (error) {
    console.log('here');
    console.error(error);
  }
}

doStuffY();

// Catch takes in an argument which is an error
/* If you ever wanna deal with catching an error inside of async and await, you need to wrap all your async code inside of a try 
then put a catch at the end to make sure you catch any errors that occur inside of it
and this is not gonna just catch errors inside of your actual promise but any error */

// Exercise

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error');
    }, delay);
  });
}

// Call getValueWithDelay twice and print out the returned value
// Then call getValueWithDelayError and make sure that the error is properly caught.

async function doStuffZ() {
  try {
    const message = await getValueWithDelay('Delayed Value Alpha', 250);
    console.log(message);
    const message2 = await getValueWithDelay('Delayed Value Beta', 250);
    console.log(message2);
    const message3 = await getValueWithDelayError('Delayed Value Gamma', 250);
    console.log(message3);
  } catch (error) {
    console.log('Error caught!');
    console.error(error);
  } finally {
    console.log('finally!');
  }
}

doStuffZ();

/* You can essentially replace any promise at all with async await and it will work just fine
If you're doing any form of looping or doing things one after the other where you are waiting and waiting and waiting, just know you have to wait for the previous value before you can execute the next line of code
but with promises if you're not chaining them, they execute in parallel which means they can all execute at the exact same time 
Depending on the use case if you need the previous value or not, it may makes more sense to use promises instead of the async await keyword */
