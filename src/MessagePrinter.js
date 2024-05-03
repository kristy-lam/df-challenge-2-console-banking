export default class MessagePrinter {
    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError(
                'Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviour

    static printMessage(transactionMethodsOutput) { 
        let message;

        // Action for unsuccessful cases
        if (typeof transactionMethodsOutput === 'string') {
            // For deposit
            if (transactionMethodsOutput === 'deposit') {
                message = 'Your deposit is unsuccessful - \n' +
                    'the amount must be a positive number e.g. 100';
            // For withdrawal
            } else {
                message = 'Your withdrawal is unsuccessful - \n' +
                    'the amount must be a positive number ' +
                    'e.g. 100, \nand cannot be larger than your balance';
            }

        // Action for successful cases
        } else {      
            const transactionType = transactionMethodsOutput[3];
            message = `Your ${transactionType} is successful.`;
        }
        
        console.log(message);
        return message;  // For testing purpose only
    }
}