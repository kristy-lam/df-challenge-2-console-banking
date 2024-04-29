import Deposit from "../src/Deposit.js";

describe('Deposit Class Tests: ', () => {
    describe('Deposit Initialization Tests: ', () => {
        it('2.2 Should be an instance of the Deposit class which is a sub class of the Transaction class', () => {
            // Arrange
            // Act
            let testDeposit = new Deposit();
            // Assert
            expect(testDeposit).toBeInstanceOf(Deposit);
        })

        it('2.3 Should have the private property of date initialized to an instance of the DateGenerator class', () => {
            // Arrange
            let testDeposit = new Deposit();
            // Create spy object as date
            let testDateGenerator = jasmine.createSpyObj('testDateGenerator', {
                getDate: '10/01/2012',
            })
            // Act            
            testDeposit.setDate(testDateGenerator.getDate());
            // Assert
            expect(testDeposit.getDate()).toEqual('10/01/2012');
        })
        
    });
    
})