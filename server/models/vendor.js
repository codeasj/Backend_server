const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  profilepic: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  vendorTypeId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendorType",
    },
  ],
  documents: [
    {
      type: String,
      required: true,
    },
  ],

  accountNumber: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },

  accountHolderName: {
    type: String,
    required: true,
  },

  ifscCode: {
    type: String,
    required: true,
  },

  street: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  pincode: {
    type: String,
  },

  addedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  addedBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vendor", vendorSchema);
