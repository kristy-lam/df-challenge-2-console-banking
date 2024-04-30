export default class DateGenerator{
    // Properties
    static #defaultDate1 = '10/01/2012';
    static #defaultDate2 = '13/01/2012';
    static #defaultDate3 = '14/01/2012';

    // Make class abstract
    constructor() {
        if (new.target === DateGenerator) {
            throw new TypeError('Cannot instantiate abstract Date Generator class');
        }
    }

    // Behaviours
    static getDefaultDate1() { return DateGenerator.#defaultDate1; }
    static getDefaultDate2() { return DateGenerator.#defaultDate2; }
    static getDefaultDate3() { return DateGenerator.#defaultDate3; }

    static getToday() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;  // Because May is outputted as '4'    
        const date = today.getDate();
        const result = [year, month, date];
        return result;
    }

        static dateFormatter(year, month, date) {
        month = String(month).padStart(2, '0');  // Add '0' if month is only one digit        
        date = String(date).padStart(2, '0');  // Add '0' if date is only one digit        
        const formattedDate = `${date}/${month}/${year}`;        
        return formattedDate;        
    }

    static generateToday() {
        const todayArr = DateGenerator.getToday();
        const formattedDate = DateGenerator.dateFormatter(...todayArr);
        return formattedDate;
    }
}