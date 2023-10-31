const VendorType = require("../models/vendorType");

exports.updateVendorType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status, createdBy } = req.body;
    const vendortps = await VendorType.findByIdAndUpdate(
      { _id: id },
      { name, status, createdAt: Date.now(), createdBy }
    );

    if (!vendortps) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: vendortps,
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
