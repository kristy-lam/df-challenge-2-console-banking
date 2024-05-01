import MessagePrinter from "../src/MessagePrinter.js";
 
describe('Message Printer Class Tests: ', () => {
    describe('Message Print Class Initialisation Tests: ', () => {
        it('4.1 Should have an abstract Message Printer class', () => {
            // Arrange
            // Act
            // Assert
            expect(() => new MessagePrinter()).toThrowError(TypeError,
                'Cannot instantiate abstract Message Printer class');
        })
    })

    describe('Success Messages Functionality Tests: ', () => {
        let testAccount = jasmine.createSpyObj("testAccount", {
            actionType: undefined,            
        })

        it('4.2 Should console log a success message when a deposit is successful', () => {
            // Arrange
            testAccount.actionType = 'deposit';
            const expected = 'Your deposit is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printSuccessMessage(testAccount.actionType)).toEqual(expected);
        })

        it('6.1 Should console log a success message when a withdrawal is successful', () => {
            // Arrange
            testAccount.actionType = 'withdrawal';
            const expected = 'Your withdrawal is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printSuccessMessage(testAccount.actionType)).toEqual(expected);
        })
    })
    
    describe('Transaction Formatter Functionality Tests: ', () => {
        it('7.1 Should have a title row for the transactions in the default terminal display as specified in the README file', (() => {
            // Arrange
            const expected = 'date       || credit  || debit  || balance';
            // Act
            const actual = MessagePrinter.getTransactionTitleRow();
            // Assert
            expect(actual).toEqual(expected);
        }))

        it('7.2 Should have information of the default transactions ready in the format as specified in the README file', (() => {
            // Arrange
            const testTransaction = jasmine.createSpyObj('Test Transaction', {
                output: ['10/01/2012', 1000, 1000, 'deposit']
            })
            const expected = '10/01/2012 || 1000.00 ||        || 1000.00';
            // Act
            const actual = MessagePrinter.transactionFormatter(testTransaction.output);
            // Assert
            expect(actual).toEqual(expected);
        }))
    })
})
