const Color = require("../models/color");

exports.updateColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status, createdBy } = req.body;
    const colors = await Color.findByIdAndUpdate(
      { _id: id },
      { name, status, createdAt: Date.now(), createdBy }
    );

    if (!colors) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: colors,
      message: "Entry updated succesfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
