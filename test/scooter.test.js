const Scooter = require('../src/scooter');

describe("test scooter object", () => {

    test("if params are set correctly", () => {
        let scooter = new Scooter("98765", "Honda", "A1234","600mAh","black");
        expect(scooter.barCode).toBe("98765");
        expect(scooter.make).toBe("Honda");
        expect(scooter.model).toBe("A1234");
        expect(scooter.batteryCapacity).toBe("600mAh");
        expect(scooter.color).toBe("black");
        


    })


})