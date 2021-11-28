const PaymentDetails = require('../src/payment-details');
const User = require('../src/user');


describe("test payment details object", () => {

    test("if params are set correctly", () => {
       
        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let payment = new PaymentDetails("AMEX", "1234");
        user.paymentDetails = payment;
        expect(user.paymentDetails.cardType).toBe("AMEX");
        expect(user.paymentDetails.cardNumber).toBe("1234");
        
        


    })

})
