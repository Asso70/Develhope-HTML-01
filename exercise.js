const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    const person = persons.find(item => item.id === id);
    if(person) {
      setTimeout(() => resolve(person), 1000);
    }
    else {
      reject(new Error("Chiiiiiiiii?"));
    }
  });
}

fetchPersonById(5).then((person) => console.log(person));