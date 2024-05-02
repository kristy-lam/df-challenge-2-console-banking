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

    transactionFormatter(transaction) {
        if (transaction[3] === 'deposit') {
            const date = transaction[0].padEnd(11, ' ');
            const credit = String(transaction[1].toFixed(2)).padEnd(8, ' ');
            const debit = ''.padEnd(7, ' ');
            const updatedBalance = transaction[2].toFixed(2);
            const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}\n`;
            return entry;
        } else if (transaction[3] === 'withdrawal') {
            const date = transaction[0].padEnd(11, ' ');
            const credit = ''.padEnd(8, ' ');
            const debit = String(transaction[1].toFixed(2)).padEnd(7, ' ');
            const updatedBalance = transaction[2].toFixed(2);
            const entry = `${date}|| ${credit}|| ${debit}|| ${updatedBalance}\n`;
            return entry;
        }        
    }
   
}