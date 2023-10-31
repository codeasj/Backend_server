const Customer = require("../models/customers");
const Currency = require("../models/currency");

// add customer
exports.createCustomer = async (req, res) => {
    try {
      //fetch data
      const { fullname, companyName, currencyId, countryId, defaultSizeId, docs ,
         addedBy } = req.body;
      //create a new vendor obj and insert in db
      const response = await Customer.create({
        fullname,
        companyName,
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