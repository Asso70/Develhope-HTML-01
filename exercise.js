class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    }

    this.#amount += amount;
  }

  withdraw(amount) {
  // Nell'esercizio precedente davo per scontato di dover evitare il crash. E ho messo try-catch su entrambi i metodi di modifica conto (pur avendo in realtà prima
  // testato che andasse in crash senza i try-catch). OK, cmq ora geatisco su questo (sull'altro sarebbe identico a come già fatto nell'esercizio precedente)
    try {
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }

      if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance');
      }

      this.#amount -= amount;
      }
    catch(e) {
      console.log(e.message);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();