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

    static generateCustomDate(date, month, year) {
        switch (month) {
            case 'Jan':
                month = 1;
                break;
            case 'Feb':
                month = 2;
                break;
            case 'Mar':
                month = 3;
                break;
            case 'Apr':
                month = 4;
                break;
            case 'May':
                month = 5;
                break;
            case 'Jun':
                month = 6;
                break;
            case 'Jul':
                month = 7;
                break;
            case 'Aug':
                month = 8;
                break;
            case 'Sep':
                month = 9;
                break; 
            case 'Oct':
                month = 10;
                break;
            case 'Nov':
                month = 11;
                break;
            case 'Dec':
                month = 12;
                break;
        }
        const dateArr = [year, month, date];
        const formattedDate = DateGenerator.#dateFormatter(...dateArr);
        return formattedDate;
    }
}