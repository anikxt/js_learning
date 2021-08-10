/* Fetch let's you query information that is on the web.
Generally, you're gonna do this in the form of an API 
API is really just a website that is formatted in a way that will return to you data that you can use inside of your JavaScript code or really any other programming language you want */

// Fetch is asynchronous

const URL = 'https://jsonplaceholder.typicode.com/posts'; // 'posts' is just the collection of data that we are accessing
const button = document.querySelector('button');

// window
//   .fetch(URL)
//   .then((response) => {
//     //   console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// console.log('here');

// Exercise
// log the name of each of the users

// window
//   .fetch(URL)
//   .then((response) => {
//     //   console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.map((user) => user.name));
//   });

// Convert the promise version into async-await version

// async function doStuff() {
//   try {
//     const response = await fetch(URL);
//     console.log(response.ok); // returns false if the response is a fail and vice versa
//     if (response.ok) {
//       const users = await response.json(); // convert the response to JSON
//       console.log(users.map((user) => user.name));
//     } else {
//       console.log('FAILURE');
//     }
//   } catch (e) {
//     console.log('Error');
//   }
// }

//

// button.addEventListener('click', doStuff);

// async function doStuff() {
//   // sending data to the server
//   const response = await fetch(URL, {
//     method: 'POST', // POST tells us that we are posting data to the server
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       // convert our object into string version of JSON
//       title: 'New post',
//     }),
//   });
//   const post = await response.json(); // convert the response to JSON
//   console.log(post);
// }

// doStuff();

// we're telling the server that we are gonna send the data but we are not actually sending the data
// In order to send data with our request we need to send it something inside call the body

/* If you're gonna use JSON API which most APIs are gonna be JSON based, the header is important that you specify Content-Type of application/json 
and that you always stringify your body which you just can't pass it as an object, you need to pass it as string.
that's the two most important thing to understand when dealing with any API */

// Exercise

// Fetch out all the comments and print themout on the screen

const URLX = 'https://jsonplaceholder.typicode.com/comments?postId=1';

fetch(URLX).then((res) =>
  res.json().then((comments) => {
    console.log(comments);
  })
);
