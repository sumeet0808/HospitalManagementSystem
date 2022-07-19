import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ErrorStatus } from '../controllers/constants.js';

const DoctorSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: [true, ErrorStatus.pleaseProvideDoctorName],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  specialization: {
    type: String,
  },
  emailId: {
    type: String,
    required: [true, ErrorStatus.pleaseEnterEmail],
    validate: {
      validator: validator.isEmail,
      message: ErrorStatus.pleaseProvideValidEmail,
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, ErrorStatus.pleaseEnterPassword],
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: [true, ErrorStatus.pleaseConfirmPassword],
    select: false,
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: ErrorStatus.passwordsAreNotTheSame,
    },
  },
  consultancyFees: {
    type: String,
    required: [true, ErrorStatus.pleaseProvideDoctorFees],
  },
});

DoctorSchema.pre('save', async function () {
  // console.log(this.modifiedPaths())
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
});

DoctorSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

DoctorSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model('Doctor', DoctorSchema);
