export default class Transaction {
    #date;

    constructor(date) {
        // Workaround to simulate an abstract class
        if (new.target === Transaction) {
            throw new TypeError('Cannot construct abstract instances directly');
        }

        this.#date = date;
       
    }

    getDate = () => { return this.#date }

    // Setter created for testing only
    setDate = (newDate) => { this.#date = newDate }
        
            
}