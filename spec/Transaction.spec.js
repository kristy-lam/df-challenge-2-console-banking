import Transaction from "../src/Transaction.js";

describe('Transaction Class Tests: ', () => {
    let testTransaction;
    
    beforeEach(() => {
        testTransaction = new Transaction();
    });

    afterEach(() => {
        testTransaction = undefined;
    });

    // describe('Transaction Initialisation Tests: ', () => {
    //     it('2.1 Should be an instance of the Transaction class', () => {
    //         // Arrange
    //         // Act
    //         // Assert
    //         expect(testTransaction).toBeInstanceOf(Transaction);
    //     })

    //     it('2.2 Should have a private property of date initialized to an instance of the DateGenerator class', () => {
    //         // Arrange
    //         // Create spy object as date
    //         const testDateGenerator = jasmine.createSpyObj('testDateGenerator', {
    //             getDate: '10/01/2012',
    //         })
    //         // Act            
    //         testTransaction.setDate(testDateGenerator.getDate());
    //         // Assert
    //         expect(testTransaction.getDate()).toEqual('10/01/2012');
    //     })

    //     it('2.3 Should have a private property of amount initialized to 0', () => {
    //         // Arrange
    //         // Act            
    //         // Assert
    //         expect(testTransaction.getAmount()).toEqual(0);
    //     })

    //     it('2.4 Should have a private property of updated balance initialized to 0', () => {
    //         // Arrange
    //         // Act            
    //         // Assert
    //         expect(testTransaction.getUpdatedBalance()).toEqual(0);
    //     })

    //     it('2.5 Should have a private property of type initialized to null', () => {
    //         // Arrange
    //         // Act            
    //         // Assert
    //         expect(testTransaction.getType()).toEqual(null);
    //     })

    //     it('2.7 Should store output of the deposit method of the Account class as an instance of the Transaction class', () => {
    //         // Arrange
    //         const testAccount = jasmine.createSpyObj('testAccount', {
    //             testDepositOutput: ['10/01/2012', 1000, 1000, 'deposit']
    //         })
    //         // Act
    //         const testTransaction = new Transaction(testAccount.testDepositOutput)
    //         // Assert
    //         expect(testTransaction).toBeInstanceOf(Transaction);
    //     });

    //     it('2.8 Should store output of the deposit method of the Account class and create an instance of the Transaction class with the correct properties', () => {
    //         // Arrange            
    //         const expected = ['10/01/2012', 1000, 1000, 'deposit'];
    //         let testAccount = jasmine.createSpyObj("testAccount", {
    //             constructorInput: ['10/01/2012', 1000, 1000, 'deposit']
    //         });
    //         /* As the spy object property testAccount.constructorInput is not             
    //         iterable, it is re-declared below */
    //         testAccount.constructorInput = ['10/01/2012', 1000, 1000, 'deposit'];
    //         // Act
    //         testTransaction = new Transaction(...testAccount.constructorInput);
    //         const date = testTransaction.getDate();
    //         const amount = testTransaction.getAmount();
    //         const updatedBalance = testTransaction.getUpdatedBalance();
    //         const type = testTransaction.getType();
    //         const actual = [date, amount, updatedBalance, type];
    //         // Assert
    //         expect(actual).toEqual(expected);
    //     });
    // });

    describe('Transaction Formatter Functionality Tests: ', () => {
        it('7.1 Should have a title row for the transactions in the default terminal display as specified in the README file', (() => {
            // Arrange
            const expected = 'date       || credit  || debit  || balance\n';
            // Act
            const actual = testTransaction.getTransactionTitleRow();
            // Assert
            expect(actual).toEqual(expected);
        }))

        // it('7.2 Should have information of the default deposits ready in the format as specified in the README file', (() => {
        //     // Arrange
        //     let testAccount = jasmine.createSpyObj("testAccount", {
        //         constructorInput: ['10/01/2012', 1000, 1000, 'deposit']
        //     });
        //     /* As the spy object property testAccount.constructorInput is not             
        //     iterable, it is re-declared below */
        //     testAccount.constructorInput = ['10/01/2012', 1000, 1000, 'deposit'];
        //     const expected = '10/01/2012 || 1000.00 ||        || 1000.00\n';            
        //     // Act
        //     const actual = testTransaction.transactionFormatter(testAccount.constructorInput);
        //     // Assert
        //     expect(actual).toEqual(expected);
        // }))

        // it('7.3 Should have information of the default withdrawal ready in the format as specified in the README file', (() => {
        //     // Arrange
        //     let testTransaction = jasmine.createSpyObj('Test Transaction', {
        //         output: ['14/01/2012', 500, 2500, 'withdrawal']
        //     })
        //     /* As the spy object property testAccount.constructorInput is not             
        //     iterable, it is re-declared below */
        //     testTransaction.output = ['14/01/2012', 500, 2500, 'withdrawal'];
        //     const expected = '14/01/2012 ||         || 500.00 || 2500.00\n';            
        //     // Act
        //     const actual = MessagePrinter.transactionFormatter(testTransaction.output);
        //     // Assert
        //     expect(actual).toEqual(expected);
        // }))

        // it('7.4 Should be able to convert an instance of the Transaction class into an array', (() => {
        //     // Arrange
        //     let testTransaction = jasmine.createSpyObj('Test Transaction', {
        //         output: ['14/01/2012', 500, 2500, 'withdrawal']
        //     })
        //     /* As the spy object property testAccount.constructorInput is not             
        //     iterable, it is re-declared below */
        //     testTransaction.output = ['14/01/2012', 500, 2500, 'withdrawal'];
        //     const expected = '14/01/2012 ||         || 500.00 || 2500.00\n';            
        //     // Act
        //     const actual = MessagePrinter.transactionFormatter(testTransaction.output);
        //     // Assert
        //     expect(actual).toEqual(expected);
        // }))
    })
});