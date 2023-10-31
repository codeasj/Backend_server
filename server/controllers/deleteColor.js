const Color = require("../models/color");

exports.deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    await Color.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Color data deleted succesfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
