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
            let day = String(today.getDate());
            day = day.padStart(2, '0');  // Add '0' if date is only one digit
            const expected = `${day}/${month}/${year}`;
            // Act
            const actual = DateGenerator.generateDate();
            // Assert
            expect(actual).toEqual(expected);
        })

    })
})