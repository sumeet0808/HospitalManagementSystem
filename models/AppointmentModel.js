import mongoose from "mongoose";
import validator from "validator";

const AppointmentSchema = new mongoose.Schema({
  pId: {
    type: String,
    required: [true, "Enter a patient Id !"],
  },
  firstName: {
    type: String,
    required: [false, "Please Provide First Name"],
    maxlength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: [false, "Please Provide Last Name"],
    maxlength: 50,
    trim: true,
  },
  gender: {
    type: String,
    required: [false, "Please Provide Gender"],
    maxlength: 7,
  },
  email: {
    type: String,
    required: [false, "Please Provide Email"],
    validate: {
      validator: validator.isEmail,
      message: "Please Provide Valid Email",
    },
    unique: true,
  },

  contact: {
    type: String,
    required: [false, "Please Provide Contact"],
    maxlength: 10,
  },
  consultancyFees: {
    type: Number,
    required: [true, "Please Provide Doctor Fees"],
  },
  doctorName: {
    type: String,
    required: [true, "Please Provide Doctor Name"],
    maxlength: 20,
  },
  specialization: {
    type: String,
    select: false,
  },
  appDate: {
    type: Date,
    required: [true, "Enter a appointment date !"],
  },
  appTime: {
    type: String,
    required: [true, "Enter a appointment time !"],
  },
  currentStatus: {
    type: String,
    default: "Active",
  },
  doctorStatus: {
    type: String,
    default: "Active",
  },
});
export default mongoose.model("Appointment", AppointmentSchema);
