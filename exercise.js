class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if(amount < 0) {
        throw new Error("Deposit error: Cannot deposit negative amount");
      }
      this.#amount += amount;
    }
    catch(e) {
      console.log(e.message);
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try {
      if(amount < 0) {
        throw new Error("Withdrawal error: Cannot withdraw negative amount");
      }
      else if(amount > this.#amount) {
        throw new Error("Withdrawal error: Cannot withdraw more than current amount");
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

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();