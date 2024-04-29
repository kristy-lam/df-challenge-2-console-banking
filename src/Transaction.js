export default class Transaction {
    // Properties
    #date;
    #amount;
    #updatedBalance;

    // Constructor
    constructor(date, amount = 0, updatedBalance = 0) {
        // Workaround to simulate an abstract class
        if (new.target === Transaction) {
            throw new TypeError('Cannot construct abstract instances directly');
        }
        this.#date = date;
        this.#amount = amount;  
        this.#updatedBalance = updatedBalance;
    }

    // Behaviours
    getDate = () => { return this.#date };

    // Setter created for testing only
    setDate = (newDate) => { this.#date = newDate };

    getAmount = () => { return this.#amount };

    getUpdatedBalance = () => { return this.#updatedBalance };
            
}