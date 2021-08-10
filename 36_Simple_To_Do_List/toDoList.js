// 1. Select all elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// 2.When I submit the form add a new element
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //   console.log(input.value);

  // 1. Create a new item
  const item = document.createElement('div');
  item.innerText = input.value;
  item.classList.add('list-item');

  console.log(item);

  // 2. Add that item to the list
  list.appendChild(item);

  // 3. Clear input
  input.value = '';

  // 4.Setup event listeners to delete item when clicked
  item.addEventListener('click', () => {
    //  list.removeChild(item);
    item.remove();
  });
});

/* In JS when you write a function, even if you pass it more arguments than it can take,
for eg. here we're passing this function as an event argument but it only take zero arguments,
it doesn't matter it just wont pass that along */
