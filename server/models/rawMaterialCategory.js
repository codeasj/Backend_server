const mongoose = require("mongoose");

const rawMaterialCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  createdBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Raw", rawMaterialCategorySchema);
