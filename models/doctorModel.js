const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    regNo: {
      type: String,
      required: [true, "Registration number is required"],
    },
    block: {
      type: String,
      required: [true, "block is required"],
    },
    room: {
      type: String,
      required: [true, "room is required"],
    },
    problem: {
      type: String,
      required: [true, "problem is require"],
    },
    medical_his: {
      type: String,
      required: [false, "prob is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timing: {
      type: Object,
      required: [true, "timing is required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
