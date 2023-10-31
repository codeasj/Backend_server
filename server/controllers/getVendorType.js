const VendorType = require("../models/vendorType");

//get all
exports.getVendorType = async (req, res) => {
  try {
    const vendortps = await VendorType.find({});
    res.status(200).json({
      success: true,
      data: vendortps,
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
