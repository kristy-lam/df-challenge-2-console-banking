import Account from "../src/Account.js";

describe('Account Class Tests: ', () => { 

    // Arrange
    let testAccount;

    beforeEach(() => {
        testAccount = new Account();
    });

    afterEach(() => {
        testAccount = undefined;
    })

    describe('Account Initialisation Tests: ', () => {        
        it('1.1 Should be an instance of the Account class', () => {
            // Arrange
            // Act
            // Assert
            expect(testAccount).toBeInstanceOf(Account);
        });
            
        it('1.2 Should have a balance property in an account initialized to 0', () => {
            // Arrange            
            const expected = 0;
            // Act
            // Assert
            expect(testAccount.getBalance()).toEqual(expected);
        });

        it('1.3 Should have a transactions property in an account initialized as an object', () => {
            // Arrange            
            const expected = '';
            // Act
            // Assert
            expect(testAccount.getTransactions()).toEqual(expected);
        });         
    });  

    describe('Deposit Method Functionality Tests: ', () => {
        it('1.4 Should have a deposit method with date and amount as arguments which stores the date and adds the amount to the balance', () => {
            // Arrange            
            const expected = 1000;
            // Act
            testAccount.deposit('10/01/2012', 1000);
            // Assert
            expect(testAccount.getBalance()).toEqual(expected);
        });

        it('1.5 Should only allow a number as amount in the deposit method', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.deposit('10/01/2012', '1000'))).toThrowError(Error, 'Must provide a positive number');
        });

        it('1.6 Should only allow a positive number in the deposit method', () => {
            // Arrange            
            // Act            
            // Assert
            expect(() => (testAccount.deposit('10/01/2012', -500))).toThrowError(Error, 'Must provide a positive number');
        });

        it('1.7 Should only allow the deposit method to run if date is not falsy', () => {
            // Arrange 
            // Act            
            // Assert
            expect(() => (testAccount.deposit(undefined, 100))).toThrowError(Error, 'Must provide a date');
        });

        it('1.8 Should only allow the deposit method to run if amount is not falsy', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.deposit('10/01/2012', undefined))).toThrowError(Error, 'Must provide a positive number');
        });

        it('1.9 Should return error message if both date and amount are falsy', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.deposit(undefined, undefined))).toThrowError(Error, 'Must provide appropriate inputs');
        });

        it('2.6 Should return an array of date, amount, updated balance and type when the deposit method of the Account class is called', () => {
            // Arrange
            const expected = ['10/01/2012', 1000, 1000, 'deposit'];
            // Act
            // Assert
            expect(testAccount.deposit('10/01/2012', 1000)).toEqual(expected);
        });    
    });
    
    describe('Withdrawal Method Functionality Tests: ', () => {
        it('5.1 Should have a withdrawal method with date and amount as arguments which stores the date and adds the amount to the balance', () => {
            // Arrange
            testAccount.deposit('10/01/2012', 1000);
            const expected = 400;
            // Act
            testAccount.withdrawal('11/01/2012', 600);
            // Assert
            expect(testAccount.getBalance()).toEqual(expected);
        });

        it('5.2 Should only allow a number as amount in the withdrawal method', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.withdrawal('11/01/2012', '600'))).toThrowError(Error, 'Must provide a positive number');
        });

        it('5.3 Should only allow a positive number in the withdrawal method', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.withdrawal('11/01/2012', -400))).toThrowError(Error, 'Must provide a positive number');
        });

        it('5.4 Should only allow the withdrawal method to run if date is not falsy', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.withdrawal(null, 600))).toThrowError(Error, 'Must provide a date');
        });

        it('5.5 Should only allow the withdrawal method to run if amount is not falsy', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.withdrawal('11/01/2012', undefined))).toThrowError(Error, 'Must provide a positive number');
        });

        it('5.6 Should return error message if both date and amount are falsy', () => {
            // Arrange
            // Act
            // Assert
            expect(() => (testAccount.withdrawal(null, undefined))).toThrowError(Error, 'Must provide appropriate inputs');
        });

        it('5.7 Should only allow a withdrawal if the amount is not larger than the account balance', () => {
            // Arrange
            testAccount.deposit('10/01/2012', 1000);
            const expected = 1000;
            // Act            
            // Assert
            expect(() => (testAccount.withdrawal('11/01/2012', 2000))).toThrowError();
        });

        it('5.8 Should throw error if user makes a withdrawal larger than the account balance', () => {
            // Arrange
            testAccount.deposit('10/01/2012', 1000);
            // Act
            // Assert
            expect(() => (testAccount.withdrawal('11/01/2012', 1500))).toThrowError(Error, 'Withdrawal amount must not be larger than balance');
        });
    });

    describe('Transaction Formatter Functionality Tests: ', () => {
        it('7.1 Should have a title row for the transactions in the default terminal display as specified in the README file', (() => {
            // Arrange
            const expected = 'date       || credit  || debit  || balance\n';
            // Act
            const actual = testAccount.getTransactionTitleRow();
            // Assert
            expect(actual).toEqual(expected);
        }))

        it('7.2 Should have information of the default deposits ready in the format as specified in the README file', (() => {
            // Arrange
            const defaultTransaction = testAccount.deposit('10/01/2012', 1000)
            const expected = '10/01/2012 || 1000.00 ||        || 1000.00\n';            
            // Act
            const actual = testAccount.transactionFormatter(defaultTransaction);
            // Assert
            expect(actual).toEqual(expected);
        }))
    })
})