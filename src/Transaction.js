export default class Transaction {
    #date;
    #amount = 0;

    constructor(date, amount) {
        // Workaround to simulate an abstract class
        if (new.target === Transaction) {
            throw new TypeError('Cannot construct abstract instances directly');
        }

        this.#date = date;
        this.#date = amount;
       
    }

    getDate = () => { return this.#date }

    // Setter created for testing only
    setDate = (newDate) => { this.#date = newDate }

    getAmount = () => { return this.#amount }
        
            
}