export default class Account { 
    // Properties
    #balance; 
    #transactions = 'date       || credit  || debit  || balance\n';
    #titleRowIndex = 'date       || credit  || debit  || balance\n'.length;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    // Behaviours
    getBalance() { return this.#balance; }

    getTransactions() { return this.#transactions; }

    addTransaction(newTransaction) {
        const allTransactions = this.#transactions.slice(0, this.#titleRowIndex) +
            newTransaction + this.#transactions.slice(this.#titleRowIndex);
        this.#transactions = allTransactions;
    }

    transactionFormatter(transaction) {
        let credit;
        let debit;
        if (transaction[3] === 'deposit') {
            credit = String(transaction[1].toFixed(2)).padEnd(8, ' ');
            debit = ''.padEnd(7, ' ');
        } else {
            credit = ''.padEnd(8, ' ');
            debit = String(transaction[1].toFixed(2)).padEnd(7, ' ');
        }
        const date = String(transaction[0]).padEnd(11, ' ');
        const updatedBalance = transaction[2].toFixed(2);
        const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}\n`;
        return entry;
    }

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
        let result = [date, amount, updatedBalance, type];
        result = this.transactionFormatter(result);
        this.addTransaction(result);
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
        let result = [date, amount, updatedBalance, type];
        result = this.transactionFormatter(result);
        this.addTransaction(result);
        return result;
    }

};