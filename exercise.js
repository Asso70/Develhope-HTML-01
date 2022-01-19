const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
Object.keys(person).forEach(function(ele) {
  console.log(`${ele}: ${person[ele]}`);
});