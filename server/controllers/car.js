import Car from "../models/CarModel.js";

//getall method
export const getCars = async (req, res) => {
    try {
        const car = await Car.findAll({
            attributes: ["carID", "userID", "color", "make", "model", "licensePlate"]
        });
        res.json(car)
    } catch (error) {
        console.log(error);
    }
};

export const getCarsbyID = async(req, res) => {
    try {
        const cars = await Car.findAll({
            where: {
                userID: req.body.userID
            },
            attributes: ["carID", "userID", "color", "make", "model", "licensePlate"]
        });
        console.log("here")
        if (cars.length === 0) {
            return res.status(404).json({msg: "No cars found"})
        }

        res.json(cars)
    } catch (error) {
        console.log("oops")
        res.status(400).json({ msg: "something went wrong"})
    }
}