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
        it('4.2 Should console log a success message when a deposit is successful', () => {
            // Arrange
            const expected = ['10/01/2012', 1000, 1000, 'deposit'];
            let testAccount = jasmine.createSpyObj("testAccount", {
                deposit() { '10/01/2012', 1000 }
            })            
            // Act
            // Assert
            expect(MessagePrinter.printSuccessMessage()).toHaveBeenCalled();
        })
    })
})