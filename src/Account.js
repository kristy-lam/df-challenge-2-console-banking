export default class Account { 
    // Properties
    #balance; 
    #transactions = 'date       || credit  || debit  || balance\n';
    #titleRowIndex = 'date       || credit  || debit  || balance\n'.length;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    // Behaviours
    getBalance() { return this.#balance; }  // For testing purpose only

    getTransactions() {
        console.log(this.#transactions);
        return this.#transactions;  // For testing purpose only
    }

    #addTransaction(newTransaction) {
        // Add new transaction after title row and 
        // before old transactions, if any
        const allTransactions = this.#transactions.slice(
            0, this.#titleRowIndex) + newTransaction +
            this.#transactions.slice(this.#titleRowIndex);
        this.#transactions = allTransactions;
    }

    #transactionFormatter(transaction) {
        let credit;
        let debit;

        // Action for deposits
        if (transaction[3] === 'deposit') {
            credit = String(transaction[1].toFixed(2)).padEnd(8, ' ');
            debit = ''.padEnd(7, ' ');  
            
        // Action for withdrawals
        } else {
            credit = ''.padEnd(8, ' ');
            debit = String(transaction[1].toFixed(2)).padEnd(7, ' ');
        }

        const date = String(transaction[0]).padEnd(11, ' ');
        const updatedBalance = transaction[2].toFixed(2);
        const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}\n`;
        return entry;
    }

    deposit(date, amount, printMessage) {
        const type = 'deposit';

        // Action for inappropriate user inputs
        if (!amount || amount <= 0 || typeof amount !== 'number') {
            if (printMessage) {   
                printMessage(type);                                
            }

        // Action for successful deposits
        } else {
            const updatedBalance = this.#balance += amount;
            let result = [date, amount, updatedBalance, type];
            // Calling the callback printMessage function is optional,
            // e.g. not needed for creating default transactions
            if (printMessage) {
                printMessage(result);
            }
            result = this.#transactionFormatter(result);
            this.#addTransaction(result);
            return result;  // For testing purpose only
        }        
    }

    withdrawal(date, amount, printMessage) {
        const type = 'withdrawal';

        // Action for inappropriate user inputs
        if (amount > this.getBalance() || amount <= 0 || !amount || typeof amount !== 'number') {
            if (printMessage) {
                printMessage(type);
            }
            
        // Action for successful deposits
        } else {
            const updatedBalance = this.#balance -= amount;
            let result = [date, amount, updatedBalance, type];
            // Calling the callback printMessage function is optional,
            // e.g. not needed for creating default transactions
            if (printMessage) {
                printMessage(result);
            }
            result = this.#transactionFormatter(result);
            this.#addTransaction(result);
            return result;    // For testing purpose only
        }
    }
}