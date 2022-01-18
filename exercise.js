const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = "Simon";

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1); /* NB: Anche qui sarà "Simon". Si è fatto coincidere l'indirizzo dello stesso oggetto per entrambe le variabili, NO copiato l'oggetto in modo svincolato ovvero per
                        far vivere l'oggetto in modo indipendente per ciascuna variabile. */

console.log(person2);