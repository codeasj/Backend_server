const Raw = require("../models/rawMaterialCategory");

exports.deleteRaw = async (req, res) => {
  try {
    const { id } = req.params;
    await Raw.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Raw material category data data deleted succesfully",
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
