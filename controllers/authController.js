import Patient from "../models/PatientModel.js";
import Doctor from "../models/DoctorModel.js";
import Admin from "../models/AdminModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import login from "./loginController.js";

const register = async (req, res) => {
  const { firstName, lastName, emailId, phoneNo, password, gender } = req.body;
  if (!firstName || !lastName || !emailId || !phoneNo || !password || !gender) {
    throw new BadRequestError(ErrorStatus.pleaseProvideAllValues);
  }
  console.log('============inside3===============');
  const userAlreadyExists = await Patient.findOne({
    emailId,
  });
  console.log('============inside4===============');
  const userAlreadyExists = await Patient.findOne({
    emailId,
  });
  if (userAlreadyExists) {
    throw new BadRequestError(ErrorStatus.emailAlreadyInUse);
  }
  const data = await Patient.create({
    firstName,
    lastName,
    emailId,
    phoneNo,
    password,
    gender,
  });
  const token = data.createJWT();

  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      phoneNo: data.phoneNo,
      password: data.password,
      gender: data.gender,
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

