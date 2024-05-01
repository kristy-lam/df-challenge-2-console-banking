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
        if (!date && !amount) {
            throw Error('Must provide appropriate inputs');
        } else if (!date && amount) {
            throw Error('Must provide a date');
        } else if (typeof amount !== 'number') {
            throw Error('Must provide a number');
        } else if (amount <= 0) {
            throw Error('Must provide a positive amount');
        }

        const updatedBalance = this.#balance += amount;
        const type = 'deposit';
        const result = [date, amount, updatedBalance, type];
        // MessagePrinter.printSuccessMessage(type);
        return result;
    }

    withdrawal(date, amount) {
        if (!date && !amount) {
            throw Error('Must provide appropriate inputs');
        } else if (!date && amount) {
            throw Error('Must provide a date');
        } else if (typeof amount !== 'number') {
            throw Error('Must provide a number');
        } else if (amount <= 0) {
            throw Error('Must provide a positive amount');
        }
        const updatedBalance = this.#balance -= amount;
        const type = 'withdrawal';
        const result = [date, amount, updatedBalance, type];
        return result;
    }

};