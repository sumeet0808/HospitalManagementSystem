import Patient from "../models/PatientModel.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const getAllPatients = async (req, res) => {
  console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
  const patient = await Patient.aggregate([
    {
      $project: {
        firstName: 1,
        lastName: 1,
        gender: 1,
        email: 1,
        contact: 1,
        password: 1,
        _id: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ status: "success", patient });
};

const getPatientByContact = async (req, res) => {
  const { contact: patientContact } = req.params;
  console.log("req.params:::::::::::", req.params);

  const patient = await Patient.findOne({ contact: patientContact });
  res.status(StatusCodes.OK).json({ status: "success", patient });
};

export { getAllPatients, getPatientByContact };
