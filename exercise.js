function memoize(fn) {
  let cache = {numeri: [], risultati: []};
  return function(numero) {
    for(let i = 0; i < cache.numeri.length; i = i + 1) {
      if(cache.numeri[i] === numero) {
        console.log(`Fetching from cache for ${numero}`)
        return cache.risultati[i];
      }
    }
    console.log(`Calculating result for ${numero}`);
    let risultato = fn(numero);
    cache.numeri.push(numero);
    cache.risultati.push(risultato);
    return risultato;
  };
}
    
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
    
factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));