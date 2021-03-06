import Prescribe from '../models/PrescribeModel.js';
import { StatusCodes } from 'http-status-codes';
import Appointment from '../models/AppointmentModel.js';

const createPrescription = async (req, res) => {
  const Prescription = await Prescribe.create({
    disease: req.body.disease,
    allergies: req.body.allergies,
    prescription: req.body.prescription,
    pId: req.params.pId,
  });
  res.status(StatusCodes.CREATED).json({
    status: "success",
    data: req.body,
  });
};
const getAllPatientPrescriptionForAdmin = async (req, res) => {
  const data = await Appointment.aggregate([
    {
      $project: {
        doctorName: 1,
        pId: 1,
        firstName: 1,
        lastName: 1,
        appDate: 1,
        appTime: 1,
        _id: 1,
      },
    },
    {
      $lookup: {
        from: 'prescribes',
        localField: 'pId',
        foreignField: 'pId',
        as: 'Prescription',
      },
    },
    { $unwind: '$Prescription' },
  ]);
  res.status(StatusCodes.OK).json({
    status: "success",
    data,
  });
};

const getAllPatientPrescriptionForDoctor = async (req, res) => {
  const data = await Appointment.aggregate([
    {
      $project: {
        pId: 1,
        firstName: 1,
        lastName: 1,
        appDate: 1,
        appTime: 1,
        _id: 0,
      },
    },
    {
      $lookup: {
        from: "prescribes",
        localField: "pId",
        foreignField: "pId",
        as: "Prescription",
      },
    },
    { $unwind: "$Prescription" },
  ]);
  res.status(StatusCodes.OK).json({
    status: "success",
    data,
  });
};

export {
  createPrescription,
  getAllPatientPrescriptionForAdmin,
  getAllPatientPrescriptionForDoctor,
};
