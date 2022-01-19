const person = {
  firstName: "",
  lastName: "",
  getFirstName: function() {
    return this.firstName;
  },
  getLastName: function() {
    return this.lasttName;
  },
  setFirstName: function(nome) {
    this.firstName = nome;
  },
  setLastName: function(nome) {
    this.lastName = nome;
  },
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let john = Object.assign({}, person);
john.setFirstName("John");
john.setLastName("Doe");
let simon = Object.assign({}, person);
simon.setFirstName("Simon");
simon.setLastName("Collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins