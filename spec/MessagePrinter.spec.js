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
            // Act
            // Assert
            expect(MessagePrinter.printSuccessMessage(testAccount.actionType)).toEqual('Your deposit is successful.');
        })

    })
})