import Transaction from "../src/Transaction.js";

describe('Transaction Class Tests: ', () => {
    describe('Transaction Initialization Tests: ', () => {
        it('2.1 Should have a Transaction class which throws an error if an instance of it is created', () => {
            // Arrange
            // Act
            // Assert
            expect(() => {new Transaction()}).toThrowError(TypeError, 'Cannot construct abstract instances directly');
        });

    });

});