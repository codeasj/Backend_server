const Raw = require("../models/rawMaterialCategory");

exports.createRaw = async (req, res) => {
  try {
    //fetch data
    const { name, status, createdBy } = req.body;
    //create a new vendor obj and insert in db
    const response = await Raw.create({ name, status, createdBy });
    //send a json responce with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created succesfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
