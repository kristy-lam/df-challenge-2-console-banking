export default class Account { 
    // Properties
    #balance;
    #transactions = {};

    constructor(balance = 0) {
        this.#balance = balance;
    }

    // Behaviours
    getBalance() { return this.#balance; }

    getTransactions() { return this.#transactions; }

    deposit (date, amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#balance += amount;
        }
    }

};