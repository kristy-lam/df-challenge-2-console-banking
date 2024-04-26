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
            
        it('1.2 Should have a balance property in an account initialized to 0', () => {
            // Arrange            
            const expected = 0;
            // Act
            const testAccount = new Account();
            // Assert
            expect(testAccount.getBalance()).toEqual(expected);
        });

        it('1.3 Should have a transactions property in an account initialized as an object', () => {
            // Arrange            
            const expected = {};
            // Act
            const testAccount = new Account();
            // Assert
            expect(testAccount.getTransactions()).toEqual(expected);
        }); 

        it('1.4 Should have a deposit method with date and amount as arguments which stores the date and adds the amount to the balance', () => {
            // Arrange            
            const expected = 1000;
            // Act
            const testAccount = new Account();
            testAccount.deposit('10/01/2012', 1000);
            // Assert
            expect(testAccount.getBalance()).toEqual(expected);
        }); 



    });  
    

});