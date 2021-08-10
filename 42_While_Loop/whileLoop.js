let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

const person = {
  name: 'Kyle',
  friend: {
    name: 'Joe',
    friend: {
      name: 'Sally',
    },
  },
};

let currentPerson = person;
while (currentPerson != null) {
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend;
}
