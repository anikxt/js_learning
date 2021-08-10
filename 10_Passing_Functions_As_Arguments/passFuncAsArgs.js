function printVariable(variable) {
  console.log(variable);
}

printVariable('Hi');

console.log(printVariable);

function func(x) {
  console.log('before');
  x('hello world');
  console.log('after');
}

func(printVariable); // printVariable function is mapped to the variable 'x'

function sumCallback(a, b, callback) {
  callback(a + b);
}

function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum); // callback = handleSum

// Exercise

// Create a new function that takes two parameters
// 1. name
// 2. callback that prints out what we pass to it (printVariable)
// Take name and append 'Hello' to the begining of the name
// If I pass in 'Blaze' it will print 'Hello Blaze'

function appendString(name, callback) {
  callback('Hello ' + name + '!');
}

appendString('Blaze', printVariable);

appendString('Blaze', function (variable) {
  console.log(variable);
});

// Above two functions same thing

/* function is just a fancy variable that has a definition 
and you can actually call it with the parenthesis */
