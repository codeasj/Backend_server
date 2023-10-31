const Vendor = require("../models/vendor");

exports.createVendor = async (req, res) => {
  try {
    //fetch data

    const {
      name,
      companyName,
      vendorTypeId,
      accountNumber,
      bankName,
      accountHolderName,
      ifscCode,
      street,
      country,
      state,
      city,
      pincode,
      addedBy,
    } = req.body;
    // console.log({ body: req.body });
     console.log(req.files);
    const filename1 = req.files;

    //create a new vendor obj and insert in db
    const response = await Vendor.create({
      name,
      companyName,
      vendorTypeId,
      accountNumber,
      bankName,
      accountHolderName,
      ifscCode,
      street,
      country,
      state,
      city,
      pincode,
      addedBy,
      profilepic: filename1,
      documents: filename1,
    });

    //send a json responce with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created succesfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
