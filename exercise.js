function getKeys(obj) {
  let proprietaa = [];
  for (const proprieta in obj) {
    proprietaa.push(proprieta);
  }
  return proprietaa;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);