export default class MessagePrinter {
    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviours

    static printMessage(transactionMethodsOutput) { 
        if (typeof transactionMethodsOutput === 'string') {
            if (transactionMethodsOutput === 'deposit') {
                const message = `Your deposit is unsuccessful - the amount must be a positive number e.g. 100`;
                return message;
            }
        } else {      
            const transactionType = transactionMethodsOutput[3];
            const message = `Your ${transactionType} is successful.`;
            return message;
        }
        
    }
}