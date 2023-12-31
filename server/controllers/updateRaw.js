const Raw = require("../models/rawMaterialCategory");

exports.updateRaw = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status, createdBy } = req.body;
    const raws = await Raw.findByIdAndUpdate(
      { _id: id },
      { name, status, createdAt: Date.now(), createdBy }
    );

    if (!raws) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: raws,
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
