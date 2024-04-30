export default class Transaction {
    // Properties
    #date;
    #amount;
    #updatedBalance;

    // Constructor
    constructor(date, amount = 0, updatedBalance = 0) {
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