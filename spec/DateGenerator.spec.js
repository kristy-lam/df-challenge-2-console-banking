describe('Date Generator Class Tests: ', () => {
    describe('Date Generator Initialisation Tests: ', () => {
        it('3.1 Should have an abstract DateGenerator class', () => {
            // Arrange
            // Act
            const testDateGenerator = new DateGenerator();
            // Assert
            expect(testDateGenerator).toThrowError(TypeError,
                'Cannot instantiate abstract Date Generator class');
        })
    })
})