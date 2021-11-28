const ChargingLocation = require('../src/charging-location');
const ChargingLocations = require('../src/charging-locations');
const Scooter = require('../src/scooter');


describe("test charging locations array", () => {

    test("test add charging location",() => {

       // add charging locations so it can be searched
        let chargingLocation = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
        let chargingLocations = new ChargingLocations(chargingLocation); 
        expect(ChargingLocations.chargingLocations.length).toBe(1);

    })    

    test("test search charging locaton by zipcode",() => {

        // add charging locations so it can be searched
         let chargingLocation1 = new ChargingLocation(1,"1007 High Hawk", "Euless","TX","76039");
         let chargingLocations = new ChargingLocations(chargingLocation1); 
         let chargingLocation2 = new ChargingLocation(2,"1009 Low Hawk", "Grapevine","TX","76059");
         chargingLocations.addChargingLocation(chargingLocation2);

         let chargingLocation =  chargingLocations.findNearChargingLocation("76039");

         expect(chargingLocation.streetAddress).toBe("1007 High Hawk");
         expect(chargingLocation.city).toBe("Euless");
         expect(chargingLocation.state).toBe("TX");
         expect(chargingLocation.zipCode).toBe("76039");   
     
     })    

    

})