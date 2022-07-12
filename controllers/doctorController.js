import Doctor from "../models/DoctorModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createDoctor = async (req, res) => {
  const {
    doctorName,
    specialization,
    emailId,
    password,
    confirmPassword,
    consultancyFees,
  } = req.body;

  if (
    !doctorName ||
    !emailId ||
    !specialization ||
    !password ||
    !confirmPassword ||
    !consultancyFees
  ) {
    throw new BadRequestError("Please provide all values");
  }
  const doctor = await Doctor.create(req.body);
  res.status(StatusCodes.CREATED).json({ doctor });
};

const getAllDoctors = async (req, res) => {
  const doctor = await Doctor.aggregate([
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
  res.status(StatusCodes.OK).json({ status: "success", doctor });
};

const deleteDoctorByEmail = async (req, res) => {
  const { emailId: doctorEmail } = req.params;
  const doctor = await Doctor.findOne({ emailId: doctorEmail });
  if (!doctor) {
    throw new NotFoundError(`No doctor with id :${doctorEmail}`);
  }

  const result = await doctor.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Doctor removed from list" });
};
const getDoctorByEmail = async (req, res) => {
  const { emailId: doctorEmail } = req.params;
  const doctor = await Doctor.findOne({ emailId: doctorEmail });
  if (!doctor) {
    throw new NotFoundError(`No doctor with id :${doctorEmail}`);
  }
  res.status(StatusCodes.OK).json({
    status: "Success",
    doctor,
  });
};

export { createDoctor, deleteDoctorByEmail, getAllDoctors, getDoctorByEmail };
