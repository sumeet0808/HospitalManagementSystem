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
