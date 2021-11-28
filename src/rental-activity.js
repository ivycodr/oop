class RentalActivity {
    constructor(startTime, endTime, pickUpChargingLocationID, dropOffChargingLocationID) {
        this.startTime= startTime;
        this.endTime = endTime;
        this.pickUpChargingLocationID = pickUpChargingLocationID;
        this.dropOffChargingLocationID = dropOffChargingLocationID;
        this.paymentDetails = null;
        this.scooter = null;

    }

    calculateRentalActivity() {
        // make use of payment details passed and charge the account
        return 25;
    }

    


}

module.exports = RentalActivity;