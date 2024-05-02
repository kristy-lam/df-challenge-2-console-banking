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
                typeInput: undefined,
                output: undefined,
            })            
        })

        afterEach(() => { testAccountTransaction = undefined })

        it('4.2 Should print a success message when a deposit is successful', () => {
            // Arrange
            testAccountTransaction.output = ['10/01/2012', 1000, 2000, 'deposit'];
            const expected = 'Your deposit is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(testAccountTransaction.output)).toEqual(expected);
        })

        it('4.4 Should console log an unsuccessful message when a deposit is unsuccessful', () => {
            // Arrange
            testAccountTransaction.typeInput = 'deposit';
            const expected = 'Your deposit is unsuccessful - the amount must be a positive number e.g. 100';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(testAccountTransaction.typeInput)).toEqual(expected);
        })

        it('6.1 Should console log a success message when a withdrawal is successful', () => {
            // Arrange
            testAccountTransaction.output = ['10/01/2012', 1000, 1000, 'withdrawal'];
            const expected = 'Your withdrawal is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(testAccountTransaction.output)).toEqual(expected);
        })

        it('6.3 Should console log an unsuccessful message when a withdrawal is unsuccessful because', () => {
            // Arrange
            testAccountTransaction.typeInput = 'withdrawal';
            const expected = 'Your withdrawal is unsuccessful - the amount must be a positive number e.g. 100, and cannot be larger than your balance';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(testAccountTransaction.typeInput)).toEqual(expected);
        })
    })
})
