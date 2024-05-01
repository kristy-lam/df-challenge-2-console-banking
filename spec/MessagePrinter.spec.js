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
})