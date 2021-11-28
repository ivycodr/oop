const DemographicDetails = require('../src/demographic-details');
const User = require('../src/user')

describe("test demographic details object", () => {

    test("if params are set correctly", () => {
       
        let user = new User("Muneer", "king123");
        user.validateCredentials("Muneer","king123");
        let demographic = new DemographicDetails("1009 High Hawk", "Euless", "TX", 76039,"817-458-1764")
        user.demographicDetails = demographic;
        expect(user.demographicDetails.address).toBe("1009 High Hawk");
        expect(user.demographicDetails.zipCode).toBe(76039);
        expect(user.demographicDetails.city).toBe("Euless");
        expect(user.demographicDetails.state).toBe("TX");
        expect(user.demographicDetails.mobileNumber).toBe("817-458-1764");
        


    })


})