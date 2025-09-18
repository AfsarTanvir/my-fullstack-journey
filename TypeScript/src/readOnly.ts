/*
readonly    → Can only be assigned once (at declaration or inside constructor).
static      → Belongs to the class itself, not to individual objects.
*/

class BankAccount {
  readonly accountNumber: string = "Heello";
  private balance: number = 0;
  static bankName: string = "Sonali Bank";

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

  cashOut(amout: number) {
    if (amout + amout * 0.001 > this.balance) {
      console.log("You don't have enough money.");
      return;
    }
    this.balance -= amout + amout * 0.001;
  }
}

const acc1 = new BankAccount("ACC123");
acc1.deposit(500);
acc1.deposit(200);
console.log(acc1.getBalance());
acc1.cashOut(1000);
console.log(acc1.getBalance());
console.log(acc1.accountNumber);
// acc1.accountNumber = "NEW123"; // error: readonly

console.log(BankAccount.bankName);
// console.log(acc1.bankName); // can't access
