const FruitStand = require("../fruitstand");

describe("Fruitstand", () => {
    describe("Initialization", () => {
        it("should create an object with an owner and a name", () => {
            // ARRANGEMENT
            const ownerString = "Bob the Builder";
            const nameString = "Bob's Fruit Stand";
            const startingBalance = 0;
            // ACTION
            const myFruitStand = new FruitStand(ownerString, nameString, 0);
            // ASSERTION
            expect(myFruitStand.owner).toEqual(ownerString);
            expect(myFruitStand.name).toEqual(nameString);
        });
        it("should throw an error, if owner is not a string", () => {
            // ARRANGEMENT
            const ownerString = 0;
            const nameString = "Bob's Fruit Stand";
            const startingBalance = 0;
            const err = "Please enter valid information";
            // ACTION
            const myFruitStand = () => new FruitStand(ownerString, nameString, startingBalance);
            // ASSERTION
            expect(myFruitStand).toThrowError(err);
        })
        it("should throw an error, if name is not a string", () => {
            // ARRANGEMENT
            const ownerString = "Bob the Builder";
            const nameString = 0;
            const startingBalance = 0;
            const err = "Please enter valid information";
            // ACTION
            const myFruitStand = () => new FruitStand(ownerString, nameString, startingBalance);
            // ASSERTION
            expect(myFruitStand).toThrowError(err);
        })
        it("should throw an error, if startingBalance is not a number", () => {
            // ARRANGEMENT
            const ownerString = "Bob the Builder";
            const nameString = "Bob's Fruit Stand";
            const startingBalance = "test";
            const err = "Please enter valid information";
            // ACTION
            const myFruitStand = () => new FruitStand(ownerString, nameString, startingBalance);
            // ASSERTION
            expect(myFruitStand).toThrowError(err);
        })
    })
})