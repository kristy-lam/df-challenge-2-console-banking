import DateGenerator from "../src/DateGenerator.js";
    
describe('Date Generator Class Tests: ', () => {
    describe('Date Generator Initialisation Tests: ', () => {
        it('3.1 Should have an abstract DateGenerator class', () => {
            // Arrange
            // Act
            // Assert
            expect(() => new DateGenerator()).toThrowError(TypeError,
                'Cannot instantiate abstract Date Generator class');
        })

        it('3.2 Should be able to generate today\'s date using the generateDate method', () => {
            // Arrange
            const today = new Date();
            // Format today's date into 'dd/mm/yyyy' format
            const year = today.getFullYear();
            let month = String(today.getMonth() + 1);  // Because May is outputted as '4'
            month = month.padStart(2, '0');  // Add '0' if month is only one digit
            let date = String(today.getDate());
            date = date.padStart(2, '0');  // Add '0' if date is only one digit
            const expected = `${date}/${month}/${year}`;
            // Act
            const actual = DateGenerator.generateToday();
            // Assert
            expect(actual).toEqual(expected);
        })

        it('3.3 Should be able to get default dates for initialisation of the terminal', () => {
            // Arrange
            const expected = ['10/01/2012', '13/01/2012', '14/01/2012'];
            // Act
            const defaultDate1 = DateGenerator.getDefaultDate1();
            const defaultDate2 = DateGenerator.getDefaultDate2();
            const defaultDate3 = DateGenerator.getDefaultDate3();
            const actual = Array(defaultDate1, defaultDate2, defaultDate3);
            // Assert
            expect(actual).toEqual(expected);
        })

    })
})