import Account from "../src/Account.js";

describe('Account Class Tests: ', () => { 

    describe('Account Initialization Tests: ', () => {        
        it('1.1 Should be an instance of the Account class', () => {
            // Arrange
            // Act
            let testAccount = new Account();
            // Assert
            expect(testAccount).toBeInstanceOf(Account);
        });
    });
    

});