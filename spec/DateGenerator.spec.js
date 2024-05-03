import DateGenerator from "../src/DateGenerator.js";
    
describe('Date Generator Class Test: ', () => {
    describe('Date Generator Initialisation Tests: ', () => {
        it('2.1 Should have an abstract DateGenerator class', () => {
            // Arrange
            // Act
            // Assert
            expect(() => new DateGenerator()).toThrowError(TypeError,
                'Cannot instantiate abstract Date Generator class');
        })
    })

    describe('Generate Today Functionality Test: ', () => {
        it('2.2 Should be able to generate today\'s date using the ' +
            'generateToday method', () => {
            // Arrange
            const today = new Date();
            //* Format today's date into 'dd/mm/yyyy' format
            const year = today.getFullYear();
            //* Because May is outputted as '4'
            let month = String(today.getMonth() + 1);  
            //* Add '0' if month is only one digit
            month = month.padStart(2, '0');  
            let date = String(today.getDate());
            //* Add '0' if date is only one digit
            date = date.padStart(2, '0');  
            const expected = `${date}/${month}/${year}`;
            // Act
            const actual = DateGenerator.generateToday();
            // Assert
            expect(actual).toEqual(expected);
        })
    })

    describe('Generate Custom Date Functionality Tests: ', () => {
        it('2.3 Should be able to generate a custom date with the generateCustomDate method', () => {
            // Arrange
            const expected = '05/06/2024';
            // Act
            const actual = DateGenerator.generateCustomDate(5, 'Jun', 2024);
            // Assert
            expect(actual).toEqual(expected);
        })
    })
})