const Color = require("../models/color");

//get all
exports.getColor = async (req, res) => {
  try {
    const colors = await Color.find({});
    res.status(200).json({
      success: true,
      data: colors,
      message: "Entire data fetched successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
