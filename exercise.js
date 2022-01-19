const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
const prop = Object.keys(person);
prop.forEach(function(ele) {
  console.log(`${ele}: ${person[ele]}`);
}); 
