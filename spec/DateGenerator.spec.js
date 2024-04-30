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
            const expected = '10/01/2012';
            // Act
            const actual = DateGenerator.generateDate();
            // Assert
            expect(actual).toEqual(expected);
        })

    })
})