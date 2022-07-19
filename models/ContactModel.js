import mongoose from 'mongoose';
import validator from 'validator';
import { ErrorStatus } from '../controllers/constants.js';

const ContactSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, ErrorStatus.pleaseEnterFirstName],
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: [true, ErrorStatus.pleaseEnterEmail],
    validate: {
      validator: validator.isEmail,
      message: ErrorStatus.pleaseProvideValidEmail,
    },
    unique: true,
  },
  contact: {
    type: Number,
    required: [true, ErrorStatus.pleaseProvideContact],
    maxlength: 10,
  },
  message: {
    type: String,
    maxlength: 50,
  },
});

export default mongoose.model('Contact', ContactSchema);
