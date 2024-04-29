describe('Deposit Class Tests: ', () => {
    describe('Deposit Initialization Tests: ', () => {
        it('2.2 Should be an instance of the Deposit class which is a sub class of the Transaction class', () => {
            // Arrange
            // Act
            let testDeposit = new Deposit();
            // Assert
            expect(testDeposit).toBeInstanceOf(Deposit);
        })
        
    });
    
})