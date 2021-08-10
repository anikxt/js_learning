const divWithId = document.getElementById('div-id');
divWithId.style.color = 'red';

const divsWithClass = document.getElementsByClassName('div-class');
console.log(divsWithClass);

const divsWithClassArray = Array.from(divsWithClass);

divsWithClassArray.forEach((div) => (div.style.color = 'green'));
divsWithClass[0].style.color = 'blue';

/* getElementsByClassName is it is technically not an array
Its just very similar It just does have all the nice feature of an array 
which is why many times we convert them to any array using 'Array.from()' and then passing that in,
so we have an array to use all the nice array methods like forEach, map, select, some or whatever it is */

