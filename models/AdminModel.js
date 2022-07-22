import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ErrorStatus } from '../controllers/constants.js';

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, ErrorStatus.pleaseEnterFirstName],
    minlength: 3,
    maxlength: 20,
    trim: true,
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
    minlength: 3,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, ErrorStatus.pleaseConfirmPassword],
    minlength: 3,
    select: false,
  },
});

AdminSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
AdminSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);

  return isMatch;
};

export default mongoose.model('Admin', AdminSchema);
