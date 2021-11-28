const ChargingLocation = require('../src/charging-location');
const Scooter = require('../src/scooter');


describe("test charging location object", () => {

    test("test charging location",() => {

       // add charging locations so it can be searched
        let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
        expect(chargingLocation.locationID).toBe(1);
        expect(chargingLocation.streetAddress).toBe("1007 High Hawk");
        expect(chargingLocation.city).toBe("Euless");
        expect(chargingLocation.state).toBe("TX");
        expect(chargingLocation.zipCode).toBe("76039");   
    
    })    

    test("add scooters to charging location and validate length",() => {

        // add charging locations so it can be searched
         let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
         // create scooters 
        let scooter1 = new Scooter("42342343242", "Honda","A2334","250mAH","Black", 1);
        let scooter2 = new Scooter("12234422333", "Toyota","A1234","300mAH","Brown", 1);
        let scooter3 = new Scooter("23456789333", "Hyundai","A3425","450mAH","Red", 1);
         
        chargingLocation.addScooter(scooter1);
        chargingLocation.addScooter(scooter2);
        chargingLocation.addScooter(scooter3);

        expect(chargingLocation.scooters.length).toBe(3);        
         
     
     })    

     test("find scooters with location ID",() => {

        // add charging locations so it can be searched
         let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
         // create scooters 
        let scooter1 = new Scooter("42342343242", "Honda","A2334","250mAH","Black", 1);
        let scooter2 = new Scooter("12234422333", "Toyota","A1234","300mAH","Brown", 2);
        let scooter3 = new Scooter("23456789333", "Hyundai","A3425","450mAH","Red", 3);
         
        chargingLocation.addScooter(scooter1);
        chargingLocation.addScooter(scooter2);
        chargingLocation.addScooter(scooter3);


        let currentLocationID = 1;
        let foundScooter = chargingLocation.findScooters(currentLocationID);

        expect(foundScooter.chargingLocationID).toBe(currentLocationID);    
         
     
     })    

})