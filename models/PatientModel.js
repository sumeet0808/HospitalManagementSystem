import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please enter First name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  emailId: {
    type: String,
    required: [true, "please enter email"],
    validate: {
      validator: validator.isEmail,
      message: "please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "pls enter password"],
    minlength: 3,
    select: false,
  },
  // confirmPassword: {
  //     type: String,
  //     required: [true, 'pls confirm password'],
  //     minlength: 3,
  //     select: false
  // validate: {
  //     // This only works on CREATE and SAVE!!!

  //     validator: function (el) {
  //         return el === this.password;
  //     },
  //     message: 'Passwords are not the same!'
  // },
  // },
  lastName: {
    type: String,
    required: [true, "pls enter Last name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  phoneNo: {
    type: Number,
    required: [true, "pls enter Last name"],
    trim: true,
    maxlength: 10,
  },
  gender: {
    type: String,
    required: [true, "pls enter gender"],
    trim: true,
    maxlength: 20,
  }
})

PatientSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

PatientSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
PatientSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);

  return isMatch;
};

export default mongoose.model("Patient", PatientSchema);
