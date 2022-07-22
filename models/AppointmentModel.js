import mongoose from 'mongoose';
import validator from 'validator';
import { ErrorStatus } from '../controllers/constants.js';

const AppointmentSchema = new mongoose.Schema({
  pId: {
    type: String,
    // required: [true, "Enter a patient Id !"],
  },
  firstName: {
    type: String,
    required: [false, ErrorStatus.pleaseEnterFirstName],
    maxlength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: [false, ErrorStatus.pleaseProvideLastName],
    maxlength: 50,
    trim: true,
  },
  gender: {
    type: String,
    required: [false, ErrorStatus.pleaseProvideGender],
    maxlength: 7,
  },
  email: {
    type: String,
    required: [false, ErrorStatus.pleaseEnterEmail],
    validate: {
      validator: validator.isEmail,
      message: ErrorStatus.pleaseProvideValidEmail,
    },
    unique: true,
  },

  contact: {
    type: String,
    required: [false, ErrorStatus.pleaseProvideContact],
    maxlength: 10,
  },
  consultancyFees: {
    type: Number,
    required: [true, ErrorStatus.pleaseProvideDoctorFees],
  },
  doctorName: {
    type: String,
    required: [true, ErrorStatus.pleaseProvideDoctorName],
    maxlength: 20,
  },
  specialization: {
    type: String,
    select: false,
  },
  appDate: {
    type: Date,
    required: [true, ErrorStatus.enterAppointmentDate],
  },
  appTime: {
    type: String,
    required: [true, ErrorStatus.enterAppointmentTime],
  },
  currentStatus: {
    type: String,
    default: 'Active',
  },
  doctorStatus: {
    type: String,
    default: 'Active',
  },
  ErrorStatus: {
    type: String,
  },
});
export default mongoose.model('Appointment', AppointmentSchema);
