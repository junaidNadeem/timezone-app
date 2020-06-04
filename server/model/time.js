const mongoose = require("mongoose");

const Time = mongoose.model(
  "Time",
  new mongoose.Schema({
    region: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    datetime: {
      type: String,
      required: true,
      min: 0,
      max: 255,
    },
  })
);

module.exports = Time;
