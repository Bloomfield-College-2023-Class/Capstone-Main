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

export const getAllParked = async (req, res) => {
    try {
        const parkedCar = await parkedCars.findAll({ attributes: ["parkingLotID", "carID", "recordID", "timeEntered", "timeExited"]})

        res.json(parkedCar)
    } catch(error) {
        res.status(500).json ({ msg: "something went wrong" })
    }
}

export const deleteParkedCar = async (req, res) => {
    try {
      const { recordID } = req.body;
  
      const parkedCar = await parkedCars.findOne({
        where: {
          recordID
        },
      });
  
      if (!parkedCar) {
        return res.status(404).json({ msg: "Record not found" });
      }
  
      await parkedCar.destroy();
  
      res.json({ msg: "Record deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to delete record" });
    }
  };
  