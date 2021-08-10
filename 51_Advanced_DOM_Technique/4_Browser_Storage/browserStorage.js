/* Three types of browser storage :
                    Local Storage   |    Cookies         |  Session Storage
Storage -               10 MB       |     4 KB           |     5 MB 
Data    -           Never Expires   | Manual Expiration  |  Expire on tab close
Accessing info -       Client       |   Client/Server    |    Client
Ease of use -           Easy        |       Hard         |    Easy 

*/

// localStorage.setItem('Name', 'Blaze');
// sessionStorage.setItem('Age', '20');

// localStorage.setItem('Name', 'Hunter');
// localStorage.removeItem('Name');

// console.log(sessionStorage.getItem('Age'));

/* Cookies -> */

const date = new Date(9999, 0, 1).toUTCString();
const pastDate = new Date(1999, 0, 1).toUTCString();
document.cookie = `name=Blaze; expires=${date}`; // creating an expiration for the cookie
document.cookie = `age=25; expires=${date}`;
// document.cookie is special and it wont get overridden unlike any other normal variable
console.log(document.cookie);
document.cookie = `name=; expires=${pastDate}`;
console.log(document.cookie);

// Theres no way to delete the cookies, we just set it to blank values and an expiration in the past which deletes the cookie for us
