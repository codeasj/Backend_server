const VendorType = require("../models/vendorType");

exports.deleteVendorType = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorType.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Vendor type data deleted succesfully",
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
