function sumUntil(maxValue) {
  let somma = 0;
  for(let i = 1; i <= maxValue; i = i + 1) { // Il dono della sintesi rispedito al mittente!
    somma = somma + i;
  }
  return somma;
}

console.log(sumUntil(5));