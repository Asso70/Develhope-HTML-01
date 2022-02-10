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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const person = persons.find(function(item) {
        return item.id === id
      });
      if(person) {
        return resolve(person);
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 3000);
  })
}

function fetchJobById(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const job = jobs.find(function(item) {
        return item.id === id
      });
      if(job) {
        return resolve(job);
      }

      return reject(`Job with id: ${id} doesn't exist`);
    }, 1000);
  })
}

function promises(id) { // Meglio avere un supervisore di chiamata ;-)
  return [fetchPersonById(id), fetchJobById(id)];
}

Promise.all(promises(2)).then(function(results) {
  console.log(results);
});