export default class MessagePrinter {

    static #transactionTitleRow = 'date       || credit  || debit  || balance\n';

    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviours

    static getTransactionTitleRow() { return MessagePrinter.#transactionTitleRow; }

    static transactionFormatter(transaction) {
        if (transaction[3] === 'deposit') {
            const date = transaction[0].padEnd(11, ' ');
            const credit = String(transaction[1].toFixed(2)).padEnd(8, ' ');
            const debit = ''.padEnd(7, ' ');
            const updatedBalance = transaction[2].toFixed(2);
            const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}`;
            return entry;
        }

    }

    static printSuccessMessage(type) { 
        const message = `Your ${type} is successful.`;
        return message;
    }

}