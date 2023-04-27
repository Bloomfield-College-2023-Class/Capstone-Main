import Card from "../models/CardModel.js";


// Get all cards from sql database
export const getCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      attributes: ["rfid", "userID"],
    });
    res.json(cards);
  } catch (error) {
    console.log(error);
  }
};

export const updateCard = async (req, res) => {
    try {
      const { rfid, userID } = req.body; //gets the user id, first name, last name, email, phone number, password, username and user type from the frontend
      let updatedCard = {
        rfid,
        userID
      };
      const card = await Card.findOne({ where: { rfid } }); //get current user we are trying to change based on the id
      if (!card) return res.status(404).json({ msg: "Card not found" }); //send error if not found
      await Card.update(updatedCard, { where: { rfid } }); //update the user
      return res.json({ msg: "Card updated successfully" }); //send success message
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to update Card" }); //send failure message
    }
  };

  export const deleteCard = async (req, res) => {
    try {
      const { rfid } = req.body;
      const card = await Card.findOne({ where: { rfid } });
      if (!card) return res.status(404).json({ msg: "Card not found" });
      await Card.destroy({ where: { rfid } });
      return res.json({ msg: "Card deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to delete Card" });
    }
  };