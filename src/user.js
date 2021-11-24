const DemographicDetails = require('./demographic-details');
const PaymentDetails = require('./payment-details');


class User {
    
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.rentalActivities = [];
        this.demographicDetails = null;
        this.paymentDetails = null;
    
    
    }

    

    

    validateCredentials() {
        if ((this.username === "Muneer") && (this.password === "king123")) {
            this.validation = true;
            this.existingUser = true;
              
        }else {
            this.validation = false;
            this.existingUser = false;
        }
    }


    setDemographicDetails() {
        if (this.validation && this.existingUser) {
            let demographic = new DemographicDetails("1234 XYZ RD", "Irving", "TX", 76543,"213-888-6543");
            this.demographicDetails = demographic;
            
        }
    }    

    setPaymentDetails() {
        if (this.validation && this.existingUser) {
            let payment = new PaymentDetails("AMEX", 6547878);
            this.paymentDetails = payment;
        }
    }

    addRentalActivity(rentalActivity) {
        // we need to pass the payment details to rental activity
        if (this.paymentDetails != null) {
            rentalActivity.paymentDetails = this.paymentDetails;
            this.rentalActivities.push(rentalActivity);
        }
    
    }
       
    



    

   

    getUserCurrentLocationID() {
        // some service that looks the addresses from DB and get the location ID
        return 23;
    }

    findRentalChargingLocations(currentUserLocationID) {
        // use current userlocationID to getNearest the charging location IDs 
        // this should return the same or a different location ID depending on the distance
        return 34;
    }

    // find scooters and then attach to the rental activity
}













module.exports = User;