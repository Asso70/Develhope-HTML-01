class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = this.getFullName();
  }

// I prossimi 6 metodi non sono necessari essendo i membri (o le proprietà) pubblici dunque direttamente accessibili in lettura e scrittura
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getAge() {
    return this.age;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setAge(age) {
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
// Qui si sarebbe dovuto chiamare il metodo getter ma immagino la traccia degli esercizi non vada cambiata
console.log(person.fullName);