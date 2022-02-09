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

// code here
function fetchPersonById(id) {
  return new Promise(function(resolve, reject) {
    resolve(persons.find(function(item) {
      return item.id === id;
    }));
  });
}

// code here
fetchPersonById(2).then(function(person) {
  console.log(person);
}); // E la console rispose: "{ id: 2, firstName: 'Maria', lastName: 'Verdi', age: 32 }" :-)