const promise = new Promise((resolve, reject) => {
  const sum = 1 + 2;
  if (sum === 2) {
    resolve('Success');
  } else {
    reject('Error');
  }
});

/* 'resolve' is what happens when you successfully complete the promise
'reject' is what happens when you fail to complete the promise
you can either pass only one parameter in 'resolve' or nothing */

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

// then function essentially is the result of running the 'resolve'
// when we are calling resolve we're really calling 'then' on our promise
// same goes for 'reject' and 'catch'
// '.catch' is essentially your catch all for anytime you have an error inside of a promise whether this by using reject or actually having an error that occurs

// setTimeout(() => {
//   console.log('here');
// }, 250);

const promiseX = setTimeoutPromise(250);

promiseX.then(() => {
  console.log('here');
});

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
// we don't even need reject coz setTimeOut can never really fail

// setTimeout(() => {
//   console.log('1');
//   setTimeout(() => {
//     console.log('2');
//     setTimeout(() => {
//       console.log('3');
//     }, 250);
//   }, 250);
// }, 250);

// works same as

setTimeoutPromise(250)
  .then(() => {
    console.log('1');
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log('2');
    return setTimeoutPromise(250);
  })
  .then(() => {
    console.log('3');
  });

// when you return a promise inside of another promise and the next '.then' you call is based on previous promise that you returned

// Exercise

// Create a promise version of addEventListener

const button = document.querySelector('button');
function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}

const promiseY = addEventListenerPromise(button, 'click');

promiseY.then((e) => {
  console.log('Clicked');
  console.log(e);
});

//

// Promise Methods

Promise.all();
// this allows to do is run multiple promises
// We pass it an array of different promises an then we can do things based on whether they all fail or some of them fail, whether they all succeed or some of them succeed and so on

Promise.resolve('value').then((message) => console.log(message));
// this is going to return us a promise that successfully executed witn a result

Promise.reject('value').catch((message) => console.error(message));
// this is going to return us a failed promise

Promise.all([
  Promise.resolve('1'),
  Promise.reject('Error on 2'),
  Promise.resolve('3'),
])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.log(error);
  });
// Promise.all() will only ever call '.then' if every single promise inside of it actually succeeds
// if one of them fails or any of them it will call '.catch' with whatever the result of the first failed promise

Promise.any([
  Promise.resolve('1'),
  Promise.reject('Error on 2'),
  Promise.resolve('3'),
])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.log(error);
  });
// returns the first successful promise

Promise.race([
  Promise.resolve('1'),
  Promise.reject('Error on 2'),
  Promise.resolve('3'),
])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.log(error);
  });
// 'race' is just like 'any' but instead of first promise that succeeds it gets the period first promises that finishes whether it succeeds or fails

Promise.allSettled([
  Promise.resolve('1'),
  Promise.reject('Error on 2'),
  Promise.resolve('3'),
])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.log(error);
  });
// its gonna wait for all the promises to finish and then gives us status of success and failure and the reason or the value depending on whether they succeed or they failed

const promise = Promise.resolve('here');

promise
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
/* '.finally()' executes whether '.then' or whether '.catch' happen
essentially whether your promise resolves or rejects, it doesn't matter we always call '.finally()' */
