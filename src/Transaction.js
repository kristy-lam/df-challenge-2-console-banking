export default class Transaction {
    constructor() {
        // Workaround to simulate an abstract class
        if (new.target === Transaction) {
            throw new TypeError('Cannot construct abstract instances directly');
        }
    }
}