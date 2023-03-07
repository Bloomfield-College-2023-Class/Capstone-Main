import parkedCars from "../models/ParkedCars.js";

export const getByCar = async (req, res) => {
    try {
        const parkedCar = await parkedCars.findAll({
            where: {
                carID: req.body.carID,
            },
            attributes: ["parkingLotID", "carID", "timeEntered", "timeExited"]
        });

        if (parkedCar === 0) {
            return res.status(404).json({ msg: "no records found"})
        }
        res.json(parkedCar)
    } catch (error) {
        res.status(400).json ({ msg: "something went wrong"})
    }
}