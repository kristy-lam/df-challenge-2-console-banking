export default class DateGenerator{
    constructor() {
        if (new.target === DateGenerator) {
            throw new TypeError('Cannot instantiate abstract Date Generator class');
        }
    }

    static dateFormatter(year, month, date) {
        month = String(month).padStart(2, '0');  // Add '0' if month is only one digit        
        date = String(date).padStart(2, '0');  // Add '0' if date is only one digit        
        const formattedDate = `${date}/${month}/${year}`;        
        return formattedDate;        
    }

    static getToday() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;  // Because May is outputted as '4'    
        const date = today.getDate();
        const result = [year, month, date];
        return result;
    }

    static validateInput(dateInput) {
        return !isNaN(new Date(dateInput));
    }

    static generateDate(dateInput) {
        if (dateInput === undefined) {      
            const todayArr = DateGenerator.getToday();
            const formattedDate = DateGenerator.dateFormatter(...todayArr);
            return formattedDate;
        } else {
            const validationResult = DateGenerator.validateInput(dateInput);
            const result = validationResult ? dateInput : Error('Input must be in yyyy, month, dd format, e.g. 2012, January, 10 for 10th January 2012')
            
        }
        
    }
}