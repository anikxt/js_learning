{
  var a = 1; // var is available outside of its scope
}

console.log(a);

console.log(b);

var b = 2; // with var, it is hoisted to the top of our file

console.log(b);

// you can just redefine a var variable with the var keyword

var c = undefined;

console.log(c);

var c = 3;

console.log(c);
