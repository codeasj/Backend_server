const express = require("express");
const router = express.Router();
const { upload, uploadDoc } = require("../middleware/fileUpload");
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

//Mapping
router.post(
  "/addvendor",
  upload.fields([{ name: "profilepic", maxCount: 1 }, { name: "documents" }]),
  createVendor
);
router.post("/addVendorType", createVendorType);
router.post("/addRawMatrialCategory", createRaw);
router.post("/addColor", createColor);
//router.get("/getvendor", getVendor);
router.get("/getRawMaterialCategory", getRaw);
router.get("/getColor", getColor);
router.get("/getVendorType", getVendorType);
//router.delete("/deleteVendor/:id", deleteVendor);
router.delete("/deleteColor/:id", deleteColor);
router.delete("/deleteRawMaterialCategory/:id", deleteRaw);
router.delete("/deleteVendorType/:id", deleteVendorType);
//router.put("/updateVendor/:id", updateVendor);
router.put("/updateColor/:id", updateColor);
router.put("/updateRawMaterialCategory/:id", updateRaw);
router.put("/updateVendorType/:id", updateVendorType);

module.exports = router;
