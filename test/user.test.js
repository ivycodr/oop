const User = require('../src/user');
const DemographicDetails = require('../src/demographic-details');
const PaymentDetails = require('../src/payment-details');
const RentalActivity = require('../src/rental-activity');
const ChargingLocation = require('../src/charging-location');
const ChargingLocations = require('../src/charging-locations');
const Scooter = require('../src/scooter');


describe("setup user/ login into scooter app - validation true", () => {

    test("login user with credentials",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer", "king123");
        expect(user.username).toBe("Muneer");
        expect(user.password).toBe("king123");
        expect(user.validation).toBe(true);
    
        
    
    })

    

    test("login user with  invalid credentials - validation false",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer", "king000");
        expect(user.username).toBe("Muneer");
        expect(user.password).toBe("king123");
        expect(user.validation).toBe(false);
    
    })


    test("login with new User",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer", "king000");
        user.setNewUser();
        expect(user.newUser).toBe(true);
    
    })

    test("login with existing User",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer", "king000");
        user.setExistingUser();
        expect(user.existing).toBe(true);
    
    })

    

    

    test("test setting demographic details",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let demographic = new DemographicDetails("1009 High Hawk", "Euless", "TX", 76039,"817-458-1764")
        user.demographicDetails = demographic;
        expect(user.demographicDetails.address).toBe("1009 High Hawk");
        expect(user.demographicDetails.zipCode).toBe(76039);
        expect(user.demographicDetails.city).toBe("Euless");
        expect(user.demographicDetails.state).toBe("TX");
        expect(user.demographicDetails.mobileNumber).toBe("817-458-1764");
        expect(user.validation).toBe(true);
        
    
    })

    test("test setting payment details",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let payment = new PaymentDetails("AMEX", "1234");
        user.paymentDetails = payment;
        expect(user.paymentDetails.cardType).toBe("AMEX");
        expect(user.paymentDetails.cardNumber).toBe("1234");
       
       
        
    
    })

    test("test payment details to be null",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        expect(user.paymentDetails).toBe(null);
      
        
       
       
        
    
    })

    test("test setting user locationID",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let demographic = new DemographicDetails("1009 High Hawk", "Euless", "TX", 76039,"817-458-1764")
        user.demographicDetails = demographic;
        
        // add charging locations so it can be searched
        let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
        let chargingLocations = new ChargingLocations(chargingLocation);
        chargingLocation = new ChargingLocation(2,"1564 Low Hawk", "Grapevine","TX","76051");
        chargingLocations = new ChargingLocations(chargingLocation);

        let chargingLocationID = chargingLocations.findNearChargingLocation(user.demographicDetails.zipCode);
        user.locationID = chargingLocationID.locationID;
        expect(user.locationID).toBe(1);

       
        
    
    })

    test("test setting scooter per charging location",() => {

        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        
        // create scooters 
        let scooter1 = new Scooter("42342343242", "Honda","A2334","250mAH","Black", 1);
        let scooter2 = new Scooter("12234422333", "Toyota","A1234","300mAH","Brown", 1);
        let scooter3 = new Scooter("23456789333", "Hyundai","A3425","450mAH","Red", 1);
        
        // add charging locations so it can be searched
        let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
        chargingLocation.addScooter(scooter1);
        chargingLocation.addScooter(scooter2);
        chargingLocation.addScooter(scooter3);

        expect(chargingLocation.scooters.length).toBe(3);
       
        
    
    })



    test("test rental activity pick up",() => {

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

        user.addRentalActivity(rentalActivity);

        expect(user.rentalActivities.length).toBe(1);


                
    
    })

    test("test rental activity payment to be null",() => {

        // setting up user, payment and demographics
        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        //let payment = new PaymentDetails("AMEX", "1234");
        user.paymentDetails = null;
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
        rentalActivity.paymentDetails = user.paymentDetails;
        user.addRentalActivity(rentalActivity);

        

       expect(user.rentalActivities[0].paymentDetails).toBe(null);


                
    
    })




})

