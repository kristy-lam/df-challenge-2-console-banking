export default class MessagePrinter {
    // Make class abstract
    constructor() {
        if (new.target === MessagePrinter) {
            throw new TypeError('Cannot instantiate abstract Message Printer class');
        }
    }
}