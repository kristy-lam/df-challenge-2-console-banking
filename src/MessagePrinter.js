export default class MessagePrinter {
    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviours

    static printMessage(transactionMethodsOutput) { 
        const transactionType = transactionMethodsOutput[3];
        const message = `Your ${transactionType} is successful.`;
        return message;
    }
}