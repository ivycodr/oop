const User = require('../src/user');
const DemographicDetails = require('../src/demographic-details');
const PaymentDetails = require('../src/payment-details');


describe("setup user/ login into scooter app", () => {

    test("login user with credentials - existing user to be true",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials();
        expect(user.existingUser).toBe(true);
    
    })

    test("login user with credentials - validation to be true",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials();
        expect(user.validation).toBe(true);
    
    })

    test("login user with  invalid credentials - validation false",() => {

        let user = new User("Muneer", "king000");
        user.validateCredentials();
        expect(user.validation).toBe(false);
    
    })

    test("login user with  invalid credentials - existing user false",() => {

        let user = new User("Muneer", "king000");
        user.validateCredentials();
        expect(user.existingUser).toBe(false);
    
    })

    test("test setting demographic details",() => {

        let user = new User("Muneer", "king123");
        user.setDemographicDetails();
        //let demographic = new DemographicDetails("1234 XYZ RD", "Irving", "TX", 76543,"213-888-6543");
        //user.demographicDetails = demographic;
        console.log(user.demographicDetails);
       
        
    
    })

    test("test setting payment details",() => {

        let user = new User("Muneer", "king123");
        let payment = new PaymentDetails("AMEX", 6547878);
        user.paymentDetails = payment;
        console.log(user.paymentDetails.cardNumber);
       
        
    
    })



})

