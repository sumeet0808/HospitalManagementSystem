import Patient from '../models/PatientModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/index.js';

const getAllPatients = async (req, res) => {
  const patient = await Patient.aggregate([
    {
      $project: {
        firstName: 1,
        lastName: 1,
        gender: 1,
        emailId: 1,
        phoneNo: 1,
        password: 1,
        _id: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ status: 'success', patient });
};

const getPatientByContact = async (req, res) => {
  const { phoneNo: patientContact } = req.params;
  const patient = await Patient.findOne({ phoneNo: patientContact });
  if (!patient) {
    throw new NotFoundError(`No patient with id :${patientContact}`);
  }
  res.status(StatusCodes.OK).json({
    status: 'Success',
    patient,
  });
};

const verifyPatientByEmail = async (req, res) => {
  const { emailId: patientEmail } = req.params;
  const patient = await Patient.findOne({ emailId: patientEmail });
  if (!patient) {
    throw new NotFoundError(`No patient with id :${patientContact}`);
  }
  res.status(StatusCodes.OK).json({ status: 'Success', patient });
};

export { getAllPatients, getPatientByContact, verifyPatientByEmail };
