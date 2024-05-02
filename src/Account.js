export default class Account { 
    // Properties
    #balance;
    #transactionTitleRow = 'date       || credit  || debit  || balance\n';   
    #transactions = '';

    constructor(balance = 0) {
        this.#balance = balance;
    }

    // Behaviours
    getBalance() { return this.#balance; }

    getTransactionTitleRow() { return this.#transactionTitleRow; }

    getTransactions() { return this.#transactions; }

    deposit (date, amount) {
        if (!date && !amount) {
            throw Error('Must provide appropriate inputs');
        } else if (!date && amount) {
            throw Error('Must provide a date');
        } else if (amount <= 0 || typeof amount !== 'number') {
            throw Error('Must provide a positive number');
        }
        const updatedBalance = this.#balance += amount;
        const type = 'deposit';
        const result = [date, amount, updatedBalance, type];
        return result;
    }

    withdrawal(date, amount) {
        if (!date && !amount) {
            throw Error('Must provide appropriate inputs');
        } else if (!date && amount) {
            throw Error('Must provide a date');
        } else if (amount <= 0 || typeof amount !== 'number') {
            throw Error('Must provide a positive number');
        } else if (amount > this.getBalance()) {
            throw Error('Withdrawal amount must not be larger than balance');
        }
        const updatedBalance = this.#balance -= amount;
        const type = 'withdrawal';
        const result = [date, amount, updatedBalance, type];
        return result;
    }

    transactionFormatter(transaction) {
        if (transaction[3] === 'deposit') {
            const date = transaction[0].padEnd(11, ' ');
            const credit = String(transaction[1].toFixed(2)).padEnd(8, ' ');
            const debit = ''.padEnd(7, ' ');
            const updatedBalance = transaction[2].toFixed(2);
            const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}\n`;
            return entry;
        } else if (transaction[3] === 'withdrawal') {
            const date = transaction[0].padEnd(11, ' ');
            const credit = ''.padEnd(8, ' ');
            const debit = String(transaction[1].toFixed(2)).padEnd(7, ' ');
            const updatedBalance = transaction[2].toFixed(2);
            const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}\n`;
            return entry;
        }        
    }
};