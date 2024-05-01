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
        if (date && amount && typeof amount === 'number' && amount > 0) {
            const updatedBalance = this.#balance += amount;
            const type = 'deposit';
            const result = [date, amount, updatedBalance, type];
            return result;
        } else if (!date) {
            throw Error('Must provide a date');
        } else if (!amount) {
            throw Error('Must provide an amount');
        }
    }

};