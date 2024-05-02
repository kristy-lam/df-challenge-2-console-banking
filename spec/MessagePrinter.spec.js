import MessagePrinter from "../src/MessagePrinter.js";
 
describe('Message Printer Class Tests: ', () => {
    describe('Message Print Class Initialisation Test: ', () => {
        it('4.1 Should have an abstract Message Printer class', () => {
            // Arrange
            // Act
            // Assert
            expect(() => new MessagePrinter()).toThrowError(TypeError,
                'Cannot instantiate abstract Message Printer class');
        })
    })

    describe('Print Message Functionality Tests: ', () => {
        
        let testAccountTransaction;
        
        beforeEach(() => {
            testAccountTransaction = jasmine.createSpyObj("Test Account Transaction", {
            date: undefined,
            amount: undefined,
            type: undefined,
            })            
        })

        afterEach(() => { testAccountTransaction = undefined })

        it('4.2 Should print a success message when a deposit is successful', () => {
            // Arrange
            testAccountTransaction.type = 'deposit';
            const expected = 'Your deposit is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printSuccessMessage(testAccountTransaction.type)).toEqual(expected);
        })

        it('6.1 Should console log a success message when a withdrawal is successful', () => {
            // Arrange
            testAccountTransaction.type = 'withdrawal';
            const expected = 'Your withdrawal is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printSuccessMessage(testAccountTransaction.type)).toEqual(expected);
        })
    })
})
