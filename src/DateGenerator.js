export default class DateGenerator{
    // Make class abstract
    constructor() {
        if (new.target === DateGenerator) {
            throw new TypeError(
                'Cannot instantiate abstract Date Generator class');
        }
    }

    // Behaviours

    // Private as it would only be used in generateToday method
    static #getToday() {  
        const today = new Date();
        const year = today.getFullYear();
        // Because May is outputted as '4' 
        const month = today.getMonth() + 1;     
        const date = today.getDate();
        const result = [year, month, date];
        return result;
    }

    // Private as it would only be used in generateToday method
    static #dateFormatter(year, month, date) {
        // Add '0' if month is only one digit
        month = String(month).padStart(2, '0'); 
        // Add '0' if date is only one digit 
        date = String(date).padStart(2, '0');         
        const formattedDate = `${date}/${month}/${year}`;        
        return formattedDate;        
    }

    static generateToday() {
        const todayArr = DateGenerator.#getToday();
        const formattedDate = DateGenerator.#dateFormatter(...todayArr);
        return formattedDate;
    }

    static #validateYear(year) {
        if (!isNaN(year)) {
            year = parseInt(year);
            // Check if year has 4 digits, and not starting with 0
            const regex = /^[1-9]\d{3}$/;
            return regex.test(year) ? year : false;
        } return false;
    }

    static #validateMonth(month) {
        const months = {
            'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
            'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
        };
        return months[month] || false;
    }

    static #validateDate(year, month, date) {        
        if (!isNaN(date)) {
            date = parseInt(date, 10);
            const leapYearCondition = year % 4 === 0 && (year % 100 !== 0 ||
                year % 400 === 0);
            const daysInMonth = {
                1: 31, 2: ((leapYearCondition) ? 29 : 28), 3: 31, 4: 30, 5: 31,
                6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
            };
            if (date < 1 || date > daysInMonth[month]) {
                return false;
            }
            return date;
        } return false;
    }

    static #validateInput(dateInput) {      
        let year = dateInput[0];
        let month = dateInput[1];
        let date = dateInput[2];

        if (!DateGenerator.#validateYear(year)) {
            const message = 'The year inputted is invalid, please try again.';
            console.log(message);
            return message;
        }
        year = DateGenerator.#validateYear(year);

        if (!DateGenerator.#validateMonth(month)) {
            const message = 'The month inputted is invalid. The correct ' +
                'input \nshould be the short form of the name of the month ' +
                '\nin three characters, e.g. "Sep" for September.';
            console.log(message);
            return message;
        }
        month = DateGenerator.#validateMonth(month);

        if (!DateGenerator.#validateDate(year, month, date)) {
            const message = 'The date inputted is invalid, ' +
                'please try again.';
            console.log(message);
            return message;
        }
        date = DateGenerator.#validateDate(year, month, date);
        return [year, month, date];
    }

    static generateCustomDate(date, month, year) {        
        const dateInput = [year, month, date];
        const validationResult = DateGenerator.#validateInput(dateInput);
        if (typeof validationResult === 'string') {
            // If validation fails, return the error message
            return validationResult;
        }
        const formattedDate = DateGenerator.#dateFormatter(...validationResult);
        return formattedDate;
    }
}