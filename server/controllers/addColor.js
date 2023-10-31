const Color = require("../models/color");

exports.createColor = async (req, res) => {
  try {
    //fetch data
    const { name, code, createdBy } = req.body;
    //create a new vendor obj and insert in db
    const response = await Color.create({ name, code, createdBy });
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
