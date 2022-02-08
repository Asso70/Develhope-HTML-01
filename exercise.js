const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.parse(JSON.stringify(person), function(key, value) {
  if(typeof value === "number" || typeof value === "object") {
    return value;
  }
});

console.log(json); // Should return: { id: 1, age: 25 }