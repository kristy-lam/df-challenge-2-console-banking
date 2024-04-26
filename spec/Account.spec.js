import Account from "../src/Account.js";

describe('Account Class Tests: ', () => { 

    describe('Account Initialization Tests: ', () => {        
        it('1.1 Should be an instance of the Account class', () => {
            // Arrange
            // Act
            const testAccount = new Account();
            // Assert
            expect(testAccount).toBeInstanceOf(Account);
        });
    });

    describe('Account Initialization Tests: ', () => {        
        it('1.2 Should have a balance property in an account initialized to 0', () => {
            // Arrange            
            const expected = 0;
            // Act
            const testAccount = new Account();
            // Assert
            expect(testAccount.getBalance()).toBe(expected);
        });
    });
    

});