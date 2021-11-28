const DemographicDetails = require('./demographic-details');
const PaymentDetails = require('./payment-details');


class User {
    
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.rentalActivities = [];
        this.demographicDetails = null;
        this.paymentDetails = null;
        this.existing = null;
        this.newUser = null;
        this.validation = null;
        this.locationID = null;
    
    
    }

    
    setExistingUser() {
        this.existing = true;
    }

    setNewUser() {
        this.newUser = true;
    }
    

    validateCredentials(userName, password) {
        if ((this.username === userName) && (this.password === password)) {
            
            this.validation = true;
           
              
        }else {
            this.validation = false;
           
        }
    }




    addRentalActivity(rentalActivity) {
        this.rentalActivities.push(rentalActivity);
        
    
    }
       
    
}













module.exports = User;