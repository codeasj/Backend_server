const defaultSize = require("../models/defaultSize");

//add default size
exports.createDefaultSize = async (req, res) => {
  try {
    //fetch data
    const { name, createdBy } = req.body;
    //create a new obj and insert in db
    const response = await defaultSize.create({
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

//get default size
exports.getDefaultSize = async (req, res) => {
  try {
    const dflt = await defaultSize.find({});
    res.status(200).json({
      success: true,
      data: dflt,
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

//update default size
exports.updateDefaultSize = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, createdBy } = req.body;
    const dflt = await defaultSize.findByIdAndUpdate(
      { _id: id },
      {
        name,
        createdAt: Date.now(),
        createdBy,
      }
    );
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

//delete defaut size
exports.deletedefaultSize = async (req, res) => {
  try {
    const { id } = req.params;
    await defaultSize.findByIdAndDelete({ _id: id });
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
