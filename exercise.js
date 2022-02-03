class BankAccount {
  #amount = 0;
  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  getAmount() {
    return this.#amount;
  }

  setAmount(amount) {
    this.#amount = amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  #INTEREST_RATE = 1.03;
  constructor(initialAmount) {
    super(initialAmount);
  }

  deposit(amount) {
    let amt = this.getAmount();
    if(amt >= 1000) {
      this.setAmount(this.#INTEREST_RATE * (amt + amount));
    }
    else {
      super.deposit(amount);
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();