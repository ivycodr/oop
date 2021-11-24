class ChargingLocation {
   
    constructor(locationID, streetAddress, city, state, zipCode) {
        this.locationID = locationID;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.scooters = [];
    }

    addScooter(scooter) {
        this.scooters.push(scooter);
    }

    findScooters(locationID) {
        // return scooters
    }
}


module.exports = ChargingLocation;