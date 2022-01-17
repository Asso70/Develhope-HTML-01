function calculate() {
  let parziale = 0;
  return {
    add: function(numero) {
      parziale = parziale + numero;
      return this;
    },

    multiply: function(numero) {
      parziale = parziale * numero;
      return this;
    },

    sub: function(numero) {
      parziale = parziale - numero;
      return this;
    },

    divide: function(numero) {
      parziale = parziale / numero;
      return this;
    },

    printResult: function() {
      console.log(parziale);
    }
  }
};

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7