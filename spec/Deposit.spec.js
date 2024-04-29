import Deposit from "../src/Deposit.js";

describe('Deposit Class Tests: ', () => {
    describe('Deposit Initialization Tests: ', () => {
        it('2.2 Should be an instance of the Deposit class which is a sub class of the Transaction class', () => {
            // Arrange
            // Act
            const testDeposit = new Deposit();
            // Assert
            expect(testDeposit).toBeInstanceOf(Deposit);
        })

        it('2.3 Should have a private property of date initialized to an instance of the DateGenerator class', () => {
            // Arrange
            const testDeposit = new Deposit();
            // Create spy object as date
            const testDateGenerator = jasmine.createSpyObj('testDateGenerator', {
                getDate: '10/01/2012',
            })
            // Act            
            testDeposit.setDate(testDateGenerator.getDate());
            // Assert
            expect(testDeposit.getDate()).toEqual('10/01/2012');
        })

        it('2.4 Should have a private property of amount initialized to 0', () => {
            // Arrange
            const testDeposit = new Deposit();
            // Act            
            // Assert
            expect(testDeposit.getAmount()).toEqual(0);
        })
        
    });
    
})