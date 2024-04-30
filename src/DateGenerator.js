export default class DateGenerator{
    constructor() {
        if (new.target === DateGenerator) {
            throw new TypeError('Cannot instantiate abstract Date Generator class');
        }
    }

    static generateDate() {
        const date = new Date();
        // Format today's date into 'dd/mm/yyyy' format
        const year = date.getFullYear();
        let month = String(date.getMonth() + 1);  // Because May is outputted as '4'
        month = month.padStart(2, '0');  // Add '0' if month is only one digit
        let day = String(date.getDate());
        day = day.padStart(2, '0');  // Add '0' if date is only one digit
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
}