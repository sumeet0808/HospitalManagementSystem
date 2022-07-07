import mongoose from "mongoose";
import validator from "validator";
const appointmentSchema = new mongoose.Schema({
  pid: {
    type: String,
    required: [true, "Enter a patient Id !"],
  },
  ID: {
    type: Number,
    required: [true, "Enter a appointment Id !"],
  },
  fname: {
    type: String,
    required: [true, "Please Provide First Name"],
    maxlength: 50,
    trim: true,
  },
  lname: {
    type: String,
    required: [true, "Please Provide Last Name"],
    maxlength: 50,
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Please Provide Gender"],
    maxlength: 7,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    validate: {
      validator: validator.isEmail,
      message: "Please Provide Valid Email",
    },
    unique: true,
  },

  contact: {
    type: String,
    required: [true, "Please Provide Contact"],
    maxlength: 10,
  },
  docFees: { type: Number, required: [true, "Please Provide Doctor Fees"] },
  doctorName: {
    type: String,
    required: [true, "Please Provide Doctor Name"],
    maxlength: 20,
  },
  appdate: {
    type: Date,
    required: [true, "Enter a appointment date !"],
  },
  apptime: {
    type: Date,
    required: [true, "Enter a appointment time !"],
  },
  currentStatus: {
    type: String,
    enum: [0, 1, 2, 3, 4],
    required: [true, "Enter a current status !"],
  },
  userStatus: {
    type: String,
    required: false,
  },
  doctorStatus: {
    type: String,
    required: false,
  }, 
});
const appointments = mongoose.model("appointments", appointmentSchema);

export default appointments;
