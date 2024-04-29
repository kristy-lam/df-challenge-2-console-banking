describe('Transaction Class Tests: ', () => {
    describe('Transaction Initialization Tests: ', () => {
        it('2.1 Should have a Transaction class which throws an error if an instance of it is created', () => {
            // Arrange
            // Act
            const testTransaction = new Transaction();
            // Assert
            expect(testTransaction).toThrowError(TypeError, "Cannot construct abstract instances directly");
        });

    });

});