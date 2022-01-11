// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let salario = 1000;
  if(role === "ceo") {
    salario = 2200;
  }
  else if(role === "manager" || role === "cto") {
    salario = 1800;
  }
  else if(role === "developer") {
    salario = 1500;
  }
  return salario;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);