describe('Transaction Class Tests: ', () => {
    describe('Transaction Initialization Tests: ', () => {
        it('2.1 Should be an instance of the Deposit class, which is a sub class of the Transaction class', () => {
            // Arrange
            // Act
            const testDeposit = new Deposit();
            // Assert
            expect(testDeposit).toBeInstanceOf(Deposit);
        });

    });

});