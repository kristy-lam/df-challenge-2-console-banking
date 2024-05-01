import Account from "../src/Account.js";

describe('Account Class Tests: ', () => { 

    describe('Account Initialisation Tests: ', () => {        
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

    });  

    describe('Deposit Method Functionality Tests: ', () => {
        it('1.4 Should have a deposit method with date and amount as arguments which stores the date and adds the amount to the balance', () => {
            // Arrange            
            const expected = 1000;
            // Act
            const testAccount = new Account();
            testAccount.deposit('10/01/2012', 1000);
            // Assert
            expect(testAccount.getBalance()).toEqual(expected);
        });

        it('1.5 Should only allow a number as amount in the deposit method', () => {
            // Arrange            
            const testAccount = new Account();
            // Act
            // Assert
            expect(() => (testAccount.deposit('10/01/2012', '1000'))).toThrowError(Error, 'Must provide a number');
        });

        it('1.6 Should only allow a positive amount in the deposit method', () => {
            // Arrange            
            const testAccount = new Account();
            // Act            
            // Assert
            expect(() => (testAccount.deposit('10/01/2012', -500))).toThrowError(Error, 'Must provide a positive amount');
        });

        it('1.7 Should only allow the deposit method to run if date is not falsy', () => {
            // Arrange            
            const testAccount = new Account();
            // Act            
            // Assert
            expect(() => (testAccount.deposit(undefined, 100))).toThrowError(Error, 'Must provide a date');
        });

        it('1.8 Should only allow the deposit method to run if amount is not falsy', () => {
            // Arrange
            const testAccount = new Account();
            // Act
            // Assert
            expect(() => (testAccount.deposit('10/01/2012', undefined))).toThrowError(Error, 'Must provide an amount');
        });

        it('1.9 Should return error message if both date and amount are falsy', () => {
            // Arrange
            const testAccount = new Account();
            // Act
            // Assert
            expect(() => (testAccount.deposit(undefined, undefined))).toThrowError(Error, 'Must provide inputs');
        });

        it('2.6 Should return an array of date, amount, updated balance and type when the deposit method of the Account class is called', () => {
            // Arrange            
            const testAccount = new Account();
            let expected = ['10/01/2012', 1000, 1000, 'deposit'];
            // Act
            // Assert
            expect(testAccount.deposit('10/01/2012', 1000)).toEqual(expected);
        });

        

    });  

});