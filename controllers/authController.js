import { promisify } from "util";
import jwt from "jsonwebtoken";
import Patient from "../models/PatientModel.js";
import Doctor from "../models/DoctorModel.js";
import Admin from "../models/AdminModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { firstName, lastName, emailId, phoneNo, password, gender } = req.body;
  console.log("============inside register");
  if (!firstName || !lastName || !emailId || !phoneNo || !password || !gender) {
    throw new BadRequestError("please provide all values");
  }
  console.log("============inside3===============");
  const userAlreadyExists = await Patient.findOne({
    emailId,
  });
  console.log("============inside4===============");
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  console.log("============inside5===============");
  const patient = await Patient.create({
    firstName,
    lastName,
    emailId,
    phoneNo,
    password,
    gender,
  });
  console.log("============inside6===============");
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
  console.log("============inside7===============");
};

const patientLogin = async (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    if (!emailId || !password) {
      throw new BadRequestError("please provide all values");
    }
    const patient = await Patient.findOne({
      emailId,
    }).select("+password");
    console.log("patient::::::", patient);
    if (!patient) {
      throw new UnAuthenticatedError("invalid cerdentials");
    }
    const isPasswordCorrect = await patient.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = patient.createJWT();
    patient.password = undefined;
    res.status(StatusCodes.OK).json({
      patient,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const doctorLogin = async (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    if (!emailId || !password) {
      throw new BadRequestError("please provide all values");
    }
    const doctor = await Doctor.findOne({
      emailId,
    }).select("+password");
    if (!doctor) {
      throw new UnAuthenticatedError("invalid cerdentials");
    }
    const isPasswordCorrect = await doctor.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = doctor.createJWT();
    doctor.password = undefined;
    res.status(StatusCodes.OK).json({
      doctor,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const adminLogin = async (req, res, next) => {
  const { emailId, password } = req.body;
  try {
    if (!emailId || !password) {
      throw new BadRequestError("please provide all values");
    }
    const admin = await Admin.findOne({
      emailId,
    }).select("+password");
    if (!admin) {
      throw new UnAuthenticatedError("invalid cerdentials");
    }
    const isPasswordCorrect = await admin.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid Credentials");
    }
    const token = admin.createJWT();
    admin.password = undefined;
    res.status(StatusCodes.OK).json({
      admin,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// const protect = async (req, res, next) => {
//   // 1) Getting token and check of it's there
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }
//   console.log("In protect");
//   if (!token) {
//     return next("You are not logged in! Please log in to get access.", 401);
//   }

//   // 2) Verification token
//   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

//   // 3) Check if user still exists
//   const currentUser = await Admin.findById(decoded.userId);
//   if (!currentUser) {
//     return next("The user belonging to this token does no longer exist.", 401);
//   }

//   // GRANT ACCESS TO PROTECTED ROUTE
//   req.user = currentUser;
//   next();
// };
//export { register, login, protect };

export { register, patientLogin, doctorLogin, adminLogin };
