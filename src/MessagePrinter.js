export default class MessagePrinter {
    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviours
    static printMessage(transactionMethodsOutput) { 
        let message;
        if (typeof transactionMethodsOutput === 'string') {
            if (transactionMethodsOutput === 'deposit') {
                message = `Your deposit is unsuccessful - the amount must be a positive number e.g. 100`;
            } else {
                message = `Your withdrawal is unsuccessful - the amount must be a positive number e.g. 100, and cannot be larger than your balance`;
            }
            return message;
        } else {      
            const transactionType = transactionMethodsOutput[3];
            message = `Your ${transactionType} is successful.`;
        }
        return message;        
    }
}