"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],

  accountTransaction(transactionDatabase, action, amount) {
    if (action === transactionDatabase.DEPOSIT) {
      this.deposit(amount);
    } else {
      this.withdraw(amount);
    }
  },

  deposit(amount) {
    this.balance = this.balance + amount;
    account.addTransaction({ deposit: amount });
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount;
      account.addTransaction({ withdraw: amount });
    } else {
      alert("Not enough money!");
    }
  },

  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  getBalance() {
    return `Ваш баланс: ${this.balance}$`;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (i === id) {
        return this.transactions[i];
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      const entry = Object.entries(transaction);
      let action = entry[0][0];
      let amount = entry[0][1];
      if (type === action) {
        sum += amount;
      }
    }
    return sum;
  }
};

account.accountTransaction(Transaction, "deposit", 1500);
account.accountTransaction(Transaction, "withdraw", 500);
account.accountTransaction(Transaction, "deposit", 1000);
account.accountTransaction(Transaction, "withdraw", 2000);
account.accountTransaction(Transaction, "deposit", 100);

console.log(account.getBalance());

console.log(account.getTransactionDetails(0));

console.log(account.getTransactionTotal("deposit"));
