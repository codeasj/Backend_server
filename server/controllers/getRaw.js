const Raw = require("../models/rawMaterialCategory");

//get all
exports.getRaw = async (req, res) => {
  try {
    const raws = await Raw.find({});
    res.status(200).json({
      success: true,
      data: raws,
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
