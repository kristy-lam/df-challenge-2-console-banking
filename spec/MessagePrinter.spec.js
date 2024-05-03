import MessagePrinter from "../src/MessagePrinter.js";
 
describe('Message Printer Class Tests: ', () => {
    describe('Message Printer Class Initialisation Test: ', () => {
        it('3.1 Should have an abstract Message Printer class', () => {
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
            //* Imitate the output from the deposit or withdrawal method
            //* in the Account class
            testAccountTransaction = jasmine.createSpyObj(
                "Test Account Transaction", {
                    //* successfulOutput would be the array with date,
                    //* amount, updatedBalance and type
                    successfulOutput: undefined,
                    //* unsuccessfulOutput would only be the type of the 
                    //* transaction, i.e. 'deposit' or 'withdrawal'    
                    unsuccessfulOutput: undefined,
            })            
        })

        afterEach(() => { testAccountTransaction = undefined })

        it('3.2 Should print a success message when a deposit is successful',
            () => {
            // Arrange
                testAccountTransaction.successfulOutput = [
                    '10/01/2012', 1000, 2000, 'deposit'];
                const expected = 'Your deposit is successful.';
            // Act
            // Assert
                expect(MessagePrinter.printMessage(
                    testAccountTransaction.successfulOutput)).toEqual(expected);
        })

        it('3.4 Should console log an unsuccessful message when a deposit is ' +
            'unsuccessful', () => {
            // Arrange
            testAccountTransaction.unsuccessfulOutput = 'deposit';
            const expected = 'Your deposit is unsuccessful - \n' +
                'the amount must be a positive number e.g. 100';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(
                testAccountTransaction.unsuccessfulOutput)).toEqual(expected);
        })

        it('5.1 Should console log a success message when a withdrawal is ' +
            'successful', () => {
            // Arrange
            testAccountTransaction.successfulOutput = [
                '10/01/2012', 1000, 1000, 'withdrawal'];
            const expected = 'Your withdrawal is successful.';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(
                testAccountTransaction.successfulOutput)).toEqual(expected);
        })

        it('5.3 Should console log an unsuccessful message when a withdrawal ' +
            'is unsuccessful', () => {
            // Arrange
            testAccountTransaction.unsuccessfulOutput = 'withdrawal';
            const expected = 'Your withdrawal is unsuccessful - \n' +
                'the amount must be a positive number e.g. 100, \n' +
                'and cannot be larger than your balance';
            // Act
            // Assert
            expect(MessagePrinter.printMessage(
                testAccountTransaction.unsuccessfulOutput)).toEqual(expected);
        })
    })
})
