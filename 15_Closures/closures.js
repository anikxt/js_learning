function print(variable) {
  let c = 3;
  return function func(variable2) {
    console.log(variable);
    console.log(variable2);
    console.log(c);
  };
}

let a = print(1);

a(2);

// usually closures is defined as functions inside of other functions
