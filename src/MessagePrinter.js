export default class MessagePrinter {
    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }

    // Behaviours
    static printSuccessMessage(type) { 
        const message = `Your ${type} is successful.`;
        return message;
    }

}