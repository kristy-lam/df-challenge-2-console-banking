import Transaction from "../src/Transaction.js";

describe('Transaction Class Tests: ', () => {
    describe('Transaction Initialization Tests: ', () => {
        it('2.1 Should have a Transaction class which throws an error if an instance of it is created', () => {
            // Arrange
            // Act
            // Assert
            expect(() => {new Transaction()}).toThrowError(TypeError, 'Cannot construct abstract instances directly');
        });

        it('2.2 Should have the private property of date initialized to an instance of the DateGenerator class', () => {
            // Arrange
            // Create spy object as date
            let testDateGenerator = jasmine.createSpyObj('testDateGenerator', {
                getDate: '10/01/2012',
            })
            // Act
            Transaction.setDate(() => {testDateGenerator.getDate()});
            // Assert
            expect(Transaction.getDate()).toEqual('10/01/2012');
        });

    

    });

});