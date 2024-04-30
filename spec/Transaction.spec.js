import Transaction from "../src/Transaction.js";

describe('Transaction Class Tests: ', () => {
    describe('Transaction Initialization Tests: ', () => {
        it('2.1 Should be an instance of the Transaction class', () => {
            // Arrange
            // Act
            const testTransaction = new Transaction();
            // Assert
            expect(testTransaction).toBeInstanceOf(Transaction);
        })

        it('2.2 Should have a private property of date initialized to an instance of the DateGenerator class', () => {
            // Arrange
            const testTransaction = new Transaction();
            // Create spy object as date
            const testDateGenerator = jasmine.createSpyObj('testDateGenerator', {
                getDate: '10/01/2012',
            })
            // Act            
            testTransaction.setDate(testDateGenerator.getDate());
            // Assert
            expect(testTransaction.getDate()).toEqual('10/01/2012');
        })

        it('2.3 Should have a private property of amount initialized to 0', () => {
            // Arrange
            const testTransaction = new Transaction();
            // Act            
            // Assert
            expect(testTransaction.getAmount()).toEqual(0);
        })

        it('2.4 Should have a private property of updated balance initialized to 0', () => {
            // Arrange
            const testTransaction = new Transaction();
            // Act            
            // Assert
            expect(testTransaction.getUpdatedBalance()).toEqual(0);
        })

        it('2.5 Should have a private property of type initialized to null', () => {
            // Arrange
            const testTransaction = new Transaction();
            // Act            
            // Assert
            expect(testTransaction.getType()).toEqual(null);
        })

        

    

    });

});