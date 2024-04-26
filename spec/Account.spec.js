describe('Account Class Tests: ', () => { 

    describe('Account Initialization Tests: ', () => {        
        it('Should be an instance of the Account class', () => {
            // Arrange
            // Act
            testAccount = new Account();
            // Assert
            expect(testAccount).toBeInstanceOf(Account);
        });
    });
    
    
});