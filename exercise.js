const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student) // Ciò possibile nonostante la solo leggibilità della variabile associata all'array poiché essa contiene il riferimento o indirizzo dell'array, no il contenuto
}

addStudent('Marco');
console.log(students);