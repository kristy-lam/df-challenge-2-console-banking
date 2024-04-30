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
            const actual = DateGenerator.generateDate();
            // Assert
            expect(actual).toEqual(expected);
        })

        it('3.3 Should be able to generate a custom date using the generateDate method if a parameter is provided', () => {
            // Arrange
            const expected = '10/01/2012'
            // Act
            const actual = DateGenerator.generateDate(2012, 1, 10);
            // Assert
            expect(actual).toEqual(expected);
        })

        it('3.4 Should only allow input in yyyy, mm, dd format as the parameter in the generateDate method', () => {
            // Arrange
            // Act
            const actual = DateGenerator.generateDate(1, 10, 2012)
            // Assert
            expect(() => { actual; }).toThrowError(Error, 'Input must be in "yyyy, mm, dd" format, e.g. "2012, 01, 10" for 10th January 2012');
        })

    })
})