import { promisify } from "util";
import jwt from "jsonwebtoken";

import Patient from "../models/PatientModel.js";
import Doctor from "../models/DoctorModel.js";
import Admin from "../models/AdminModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { firstName, lastName, emailId, phoneNo, password, gender } = req.bodyl;

  if (!firstName || !lastName || !emailId || !phoneNo || !password || !gender) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await Patient.findOne({ emailId });

  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const patient = await Patient.create({
    firstName,
    lastName,
    emailId,
    phoneNo,
    password,
    gender,
  });

  const token = patient.createJWT();

  res.status(StatusCodes.CREATED).json({
    patient: {
      firstName: patient.firstName,
      lastName: patient.lastName,
      emailId: patient.emailId,
      phoneNo: patient.phoneNo,
      password: patient.password,
      gender: patient.gender,
    },
    token,
  });
};

const login = async (req, res) => {
  const { emailId, password, role } = req.body;
  if (role == "Patient") {
    console.log("in patient....................");
    if (!emailId || !password) {
      throw new BadRequestError("please provide all values");
    }
    const patient = await Patient.findOne({ emailId }).select("+password");
    if (!patient) {
      throw new UnAuthenticatedError("invalid cerdentials");
    }
    const isPasswordCorrect = await patient.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = patient.createJWT();
    patient.password = undefined;
    res.status(StatusCodes.OK).json({ patient, token });
  } else if (role == "Doctor") {
    console.log(" in doctor......................");
    if (!emailId || !password) {
      throw new BadRequestError("please provide all values");
    }
    const doctor = await Doctor.findOne({ emailId }).select("+password");

    if (!doctor) {
      throw new UnAuthenticatedError("invalid cerdentials");
    }
    const isPasswordCorrect = await doctor.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = doctor.createJWT();
    doctor.password = undefined;
    res.status(StatusCodes.OK).json({ doctor, token });
  } else if (role == "Admin") {
    console.log("......admin login");
    if (!emailId || !password) {
      throw new BadRequestError("please provide all values");
    }
    const admin = await Admin.findOne({ emailId }).select("+password");
    if (!admin) {
      throw new UnAuthenticatedError("invalid cerdentials");
    }
    const isPasswordCorrect = await admin.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = admin.createJWT();
    admin.password = undefined;
    res.status(StatusCodes.OK).json({ admin, token });
  }
};

const protect = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }


  if (!token) {
    return next("You are not logged in! Please log in to get access.", 401);    
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await Admin.findById(decoded.userId);
  if (!currentUser) {
    return next( 
        "The user belonging to this token does no longer exist.",
        401
      )
    
  }


  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
};
export { register, login, protect };
