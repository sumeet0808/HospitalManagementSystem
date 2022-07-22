import Doctor from '../models/DoctorModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import { ErrorStatus } from './constants.js';

const createDoctor = async (req, res) => {
  const {
    doctorName,
    specialization,
    emailId,
    password,
    confirmPassword,
    consultancyFees,
  } = req.body;


  const data = await Doctor.create(req.body);
  res.status(StatusCodes.CREATED).json({ status: "success", data });
};

const getAllDoctors = async (req, res) => {
  const data = await Doctor.aggregate([
    {
      $project: {
        doctorName: 1,
        password: 1,
        emailId: 1,
        consultancyFees: 1,
        _id: 0,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ status: "success", data });
};

const deleteDoctorByEmail = async (req, res) => {
  const { emailId: doctorEmail } = req.params;
  const data = await Doctor.findOne({ emailId: doctorEmail });
  if (!data) {
    throw new NotFoundError(`No doctor with email id :${doctorEmail}`);
  }

  await data.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Doctor removed from list" });
};
const getDoctorByEmail = async (req, res) => {
  const { emailId: doctorEmail } = req.params;
  const data = await Doctor.findOne({ emailId: doctorEmail });
  if (!data) {
    throw new NotFoundError(`No doctor with id :${doctorEmail}`);
  }
  res.status(StatusCodes.OK).json({
    status: "success",
    data,
  });
};

export { createDoctor, deleteDoctorByEmail, getAllDoctors, getDoctorByEmail };
