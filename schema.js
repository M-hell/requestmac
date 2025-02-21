const mongoose = require("mongoose");
const sampleSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      ref: "User",
    },
  },
  {
    timestamps: true, // Correct way to enable timestamps
  }
);

const sampleModel = mongoose.model("sample", sampleSchema);

module.exports = sampleModel;
