const mongoose = require("mongoose");

const defaultSizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
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

module.exports = mongoose.model("deaultSize", defaultSizeSchema);
