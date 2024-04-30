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

    static generateDate(yearInput, monthInput, dateInput) {
        if (yearInput === undefined && monthInput === undefined && dateInput === undefined) {      
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;  // Because May is outputted as '4'    
            const date = today.getDate();
            const formattedDate = DateGenerator.dateFormatter(year, month, date);
            return formattedDate;
        } else {
            const formattedDate = DateGenerator.dateFormatter(yearInput, monthInput, dateInput);
            return formattedDate;
        }
        
    }
}