let numberStore = [0, 1, 2];
let newNumber = 3;
/*
numberStore.push(newNumber);
Altrimenti: */

numberStore = [...numberStore, newNumber];
console.log(numberStore);