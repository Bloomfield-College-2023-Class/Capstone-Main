import Tag from "../models/TagModel.js";

export const getTags = async (req, res) => {
    try {
      const Tags = await Tag.findAll({
        attributes: ["tagID", "userID", "expirationDate", "effectiveDate"],
      });
      res.json(Tags);
    } catch (error) {
      console.log(error);
    }
  };

  export const getTagbyID = async (req, res) => {
    try {
      const tags = await Tag.findAll({
        where: {
          userID: req.body.userID,
        },
        attributes: ["tagID", "userID", "expirationDate", "effectiveDate"],
      });
      if (tags.length === 0) {
        return res.status(404).json({ msg: "No tags found" });
      }
  
      res.json(tags);
    } catch (error) {
      console.log("oops");
      res.status(400).json({ msg: "something went wrong" });
    }
  };
  
  export const updateTag = async (req, res) => {
    try {
      const { tagID, userID, expirationDate, effectiveDate } = req.body;
      let updatedTag = {
        tagID,
        userID,
        expirationDate,
        effectiveDate
      };
  
      const tag = await Tag.findOne({ where: { tagID } });
      if (!tag) return res.status(404).json({ msg: "Tag not found" });
      await Tag.update(updatedTag, { where: { tagID } });
      return res.json({ msg: "Tag updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to update Tag" });
    }
  };

  export const addTag = async (req, res) => {
    // Get the fields that we are going to register
    const { tagID, userID, expirationDate, effectiveDate } = req.body;
  
    try {
      // Update table
      await Tag.create({
        userID: userID,
        tagID: tagID,
        expirationDate: expirationDate,
        effectiveDate: effectiveDate,
      });
      res.json({ msg: "success" }); // send a response indicating success
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "failed" }); // send a response indicating failure
    }
  };

  export const deleteTag = async (req, res) => {
    try {
      const { tagID } = req.body;
      const tag = await Tag.findOne({ where: { tagID } });
      if (!tag) return res.status(404).json({ msg: "Tag not found" });
      await Tag.destroy({ where: { tagID } });
      return res.json({ msg: "Tag deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Failed to delete Tag " });
    }
  };
  