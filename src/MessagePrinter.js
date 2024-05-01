export default class MessagePrinter {

    static #transactionTitleRow = 'date       || credit  || debit  || balance';

    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviours

    static getTransactionTitleRow() { return MessagePrinter.#transactionTitleRow; }

    static printSuccessMessage(type) { 
        const message = `Your ${type} is successful.`;
        return message;
    }

}