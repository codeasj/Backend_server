const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxLength: 50,
  },
  companyName: {
    type: String,
    required: true,
  },
  currencyId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "currencyId",
    },
  ],
  countryId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "country",
    },
  ],
  defaultSizeId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "defaultSize",
    },
  ],
  docs: [
    {
      type: String,
      required: true,
    },
  ],
  addedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  addedBy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
  },
});

module.exports = mongoose.model("Customer", customerSchema);
