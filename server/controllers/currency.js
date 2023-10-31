const Currency = require("../models/currency");

//add currency
exports.createCurrency = async (req, res) => {
  try {
    //fetch data
    const { name, symbol, conversionRate, createdBy } = req.body;
    //create a new vendor obj and insert in db
    const response = await Currency.create({
      name,
      symbol,
      conversionRate,
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

//get currency
exports.getCurrency = async (req, res) => {
  try {
    const crncy = await Currency.find({});
    res.status(200).json({
      success: true,
      data: crncy,
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

//update currency
exports.updateCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, symbol, conversionRate, createdBy } = req.body;
    const crncy = await Currency.findByIdAndUpdate(
      { _id: id },
      {
        name,
        symbol,
        conversionRate,
        createdAt: Date.now(),
        createdBy,
      }
    );

    if (!crncy) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: crncy,
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

//delete currency
exports.deleteCurrency = async (req, res) => {
  try {
    const { id } = req.params;

    dltd = await Currency.findByIdAndDelete({ _id: id });

    if (!dltd) {
      res.status(400).json({
        success: false,
        message: `Data with id:${id} not found`,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Currency data deleted succesfully",
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
