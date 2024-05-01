export default class Transaction {
    // Properties
    #date;
    #amount;
    #updatedBalance;
    #type;

    // Constructor
    constructor(date, amount = 0, updatedBalance = 0, type = null) {
        this.#date = date;
        this.#amount = amount;  
        this.#updatedBalance = updatedBalance;
        this.#type = type;
    };

    // Behaviours
    getDate = () => { return this.#date };

    // Setter created for testing only
    setDate = (newDate) => { this.#date = newDate };

    getAmount = () => { return this.#amount };

    getUpdatedBalance = () => { return this.#updatedBalance };

    getType = () => { return this.#type }
    
}