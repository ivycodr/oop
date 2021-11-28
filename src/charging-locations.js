const ChargingLocation = require("./charging-location");

class ChargingLocations {
    static chargingLocations = [];
    constructor(chargingLocation) {
        ChargingLocations.chargingLocations.push(chargingLocation);
    }

    addChargingLocation(chargingLocation) {
        ChargingLocations.chargingLocations.push(chargingLocation);
    }
    
    findNearChargingLocation(zipCode) {
        const chargingLocation = ChargingLocations.chargingLocations.find(
            element => element.zipCode  == zipCode);

        
       
        return chargingLocation;
    }

}


module.exports = ChargingLocations;