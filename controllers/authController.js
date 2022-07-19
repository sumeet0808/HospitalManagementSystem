import Patient from "../models/PatientModel.js";
import Doctor from "../models/DoctorModel.js";
import Admin from "../models/AdminModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import login from "./loginController.js";

const register = async (req, res) => {
  const { firstName, lastName, emailId, phoneNo, password, gender } = req.body;

  if (!firstName || !lastName || !emailId || !phoneNo || !password || !gender) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExists = await Patient.findOne({
    emailId,
  });
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

const patientLogin = async (req, res, next) => {
  login(req, res, Patient, next)
};

const doctorLogin = async (req, res, next) => {
  login(req, res, Doctor, next)
};

const adminLogin = async (req, res, next) => {
  login(req, res, Admin, next)
};

export {
  register,
  patientLogin,
  doctorLogin,
  adminLogin
};

