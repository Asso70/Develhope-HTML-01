/*
const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}
*/

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide   = (a, b) => a / b;
const log = value => console.log(value);
// Potrebbe essere <log(`((2 + 4) * (5 + 2) - 2) / 5`);> ma a noi piacciono le sfide, pertanto:
log(`((${subtract(1970, 1968)} + ${multiply(8, 0.5)}) * (${divide(35.5, 7.1)} + ${sum(-137.17062001, 139.17062001)}) - ${subtract(2, 0)}) / ${multiply(0.2, 25)}`);