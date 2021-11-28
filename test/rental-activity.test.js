const PaymentDetails = require('../src/payment-details');
const DemographicDetails = require('../src/demographic-details');
const RentalActivity = require('../src/rental-activity');
const User = require('../src/user')
const ChargingLocation = require('../src/charging-location')
const ChargingLocations = require('../src/charging-locations')
const Scooter = require('../src/scooter');


describe("test Rental Activity object", () => {

    test("test to see if payment details set correctly", () => {
       
        // setting up user, payment and demographics
        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let payment = new PaymentDetails("AMEX", "1234");
        user.paymentDetails = payment;
        let demographic = new DemographicDetails("1009 High Hawk", "Euless", "TX", 76039,"817-458-1764")
        user.demographic;
        
       // now set this payment details to rental activity
        let rentalActivity = new RentalActivity("12:00 PM", null,user.locationID,null);
        rentalActivity.paymentDetails = user.paymentDetails;

        expect(rentalActivity.paymentDetails.cardType).toBe("AMEX");
        expect(rentalActivity.paymentDetails.cardNumber).toBe("1234");



       
        

    })

    test("test to see if scooter is set correctly to rental activity", () => {
       
        // setting up user, payment and demographics
        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let payment = new PaymentDetails("AMEX", "1234");
        user.paymentDetails = payment;
        let demographic = new DemographicDetails("1009 High Hawk", "Euless", "TX", 76039,"817-458-1764")
        user.demographicDetails = demographic;
        
        // Need to set up charging locations, scooters for a charging location
        // charging location

        let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
        // add scooter
        let scooter1 = new Scooter("42342343242", "Honda","A2334","250mAH","Black", 1);
        chargingLocation.addScooter(scooter1);

        // add this charging location to charging locations
        let chargingLocations = new ChargingLocations(chargingLocation);

        // find user's location id using the charging locations
        let userChargingLocation = chargingLocations.findNearChargingLocation("76039");
        user.locationID = userChargingLocation.locationID;
        let scooter = userChargingLocation.findScooters(user.locationID);



        // now set this payment details to rental activity
        let rentalActivity = new RentalActivity("12:00 PM", null,user.locationID,null);
        rentalActivity.scooter = scooter;

        expect(rentalActivity.scooter.barCode).toBe("42342343242");
        expect(rentalActivity.scooter.make).toBe("Honda");
        expect(rentalActivity.scooter.model).toBe("A2334");
        expect(rentalActivity.scooter.batteryCapacity).toBe("250mAH");
        expect(rentalActivity.scooter.color).toBe("Black");

        


       
        

    })

    test("test payment calculation to  rental activity", () => {
       
        // setting up user, payment and demographics
        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let payment = new PaymentDetails("AMEX", "1234");
        user.paymentDetails = payment;
        let demographic = new DemographicDetails("1009 High Hawk", "Euless", "TX", 76039,"817-458-1764")
        user.demographicDetails = demographic;
        
        // Need to set up charging locations, scooters for a charging location
        // charging location

        let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
        // add scooter
        let scooter1 = new Scooter("42342343242", "Honda","A2334","250mAH","Black", 1);
        chargingLocation.addScooter(scooter1);

        // add this charging location to charging locations
        let chargingLocations = new ChargingLocations(chargingLocation);

        // find user's location id using the charging locations
        let userChargingLocation = chargingLocations.findNearChargingLocation("76039");
        user.locationID = userChargingLocation.locationID;
        let scooter = userChargingLocation.findScooters(user.locationID);


        // now set this payment details to rental activity
        let rentalActivity = new RentalActivity("12:00 PM", "12:30 PM",user.locationID,null);
        expect(rentalActivity.calculateRentalActivity()).toBe(25);       
        

    })


})