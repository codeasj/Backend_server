const express = require("express");
const router = express.Router();
const { upload } = require("../middleware/fileUpload");

//importing controller
const { createColor } = require("../controllers/addColor");
const { createRaw } = require("../controllers/addRaw");
const { createVendor } = require("../controllers/addVendor");
const { createVendorType } = require("../controllers/addVendorType");

const { getColor } = require("../controllers/getColor");
const { getRaw } = require("../controllers/getRaw");
//const { getVendor } = require("../controllers/getVendor");
const { getVendorType } = require("../controllers/getVendorType");

const { deleteColor } = require("../controllers/deleteColor");
const { deleteRaw } = require("../controllers/deleteRaw");
//const { deleteVendor } = require("../controllers/deleteVendor");
const { deleteVendorType } = require("../controllers/deleteVendorType");

const { updateColor } = require("../controllers/updateColor");
const { updateRaw } = require("../controllers/updateRaw");
//const { updateVendor } = require("../controllers/updatevendor");
const { updateVendorType } = require("../controllers/updateVendorType");

const {
  createCurrency,
  getCurrency,
  updateCurrency,
  deleteCurrency,
} = require("../controllers/currency");
const {
  createCountry,
  getCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/country");
const {
  createDefaultSize,
  getDefaultSize,
  updateDefaultSize,
  deleteDefaultSize,
} = require("../controllers/defaultSize");

//Mapping
router.post(
  "/addvendor",
  upload.fields([{ name: "profilepic", maxCount: 1 }, { name: "documents" }]),
  createVendor
);
router.post("/addVendorType", createVendorType);
router.post("/addRawMatrialCategory", createRaw);
router.post("/addColor", createColor);
router.post("/addCurrency", createCurrency);
router.post("/addCountry", createCountry);
router.post("/addDefaultSize", createDefaultSize);

//router.get("/getvendor", getVendor);
router.get("/getRawMaterialCategory", getRaw);
router.get("/getColor", getColor);
router.get("/getVendorType", getVendorType);
router.get("/getCurrency", getCurrency);
router.get("/getCountry", getCountry);
router.get("/getDefaultSize", getDefaultSize);

//router.put("/updateVendor/:id", updateVendor);
router.put("/updateColor/:id", updateColor);
router.put("/updateRawMaterialCategory/:id", updateRaw);
router.put("/updateVendorType/:id", updateVendorType);
router.put("/updateCurrency/:id", updateCurrency);
router.put("/updateCountry/:id", updateCountry);
router.put("/updateDefaultSize/:id", updateDefaultSize);

//router.delete("/deleteVendor/:id", deleteVendor);
router.delete("/deleteColor/:id", deleteColor);
router.delete("/deleteRawMaterialCategory/:id", deleteRaw);
router.delete("/deleteVendorType/:id", deleteVendorType);
router.delete("/deleteCurrency/:id", deleteCurrency);
router.delete("/deleteCountry/:id", deleteCountry);
router.delete("/deleteDefaultSize/:id", deleteDefaultSize);

module.exports = router;
