import ParkingLot from "../models/ParkingLotModel.js";

export const getParking = async (req, res) => {
    try {
      const parkingLot = await ParkingLot.findAll({
        attributes: ["parkingLotID", "numberOfSpots"],
      });
      res.json(parkingLot);
    } catch (error) {
      console.log(error);
    }
  };

  export const updateParking = async (req, res) => {
    try {
      const { parkingLotID, numberOfSpots  } = req.body;
      let updatedLot = {
        parkingLotID, numberOfSpots
      };
      const Lot = await ParkingLot.findOne({ where: { parkingLotID } });
      if (!Lot) return res.status(404).json({ msg: "Lot not found" });
      await ParkingLot.update(updatedLot, { where: { parkingLotID } });
      return res.json({ msg: "Lot updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to update Lot" });
    }
  };