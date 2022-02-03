class BankAccount {
  constructor(totAmount) {
    this.totAmount = totAmount;
  }

  deposit(amount) {
    this.totAmount = this.totAmount + amount;
  }

  withdraw(amount) {
    this.totAmount = this.totAmount - amount;
  }

  view() {
    console.log(`Total amount: ${this.totAmount}`)
  }
}
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();