const Country = require("../models/country");

//add country
exports.createCountry = async (req, res) => {
  try {
    //fetch data
    const { name, createdBy } = req.body;
    //create a new vendor obj and insert in db
    const response = await Country.create({
      name,
      createdBy,
    });
    //send a json responce with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created succesfully",
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

//get country
exports.getCountry = async (req, res) => {
  try {
    const cntry = await Country.find({});
    res.status(200).json({
      success: true,
      data: cntry,
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

//update country
exports.updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, createdBy } = req.body;
    const cntry = await Country.findByIdAndUpdate(
      { _id: id },
      {
        name,
        createdAt: Date.now(),
        createdBy,
      }
    );

    if (!cntry) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: cntry,
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

//delete country
exports.deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    dltd = await Country.findByIdAndDelete({ _id: id });

    if (!dltd) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Country data deleted succesfully",
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
