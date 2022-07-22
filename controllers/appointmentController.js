import Appointment from '../models/AppointmentModel.js';
import { currentStatus } from './constants.js';
import { ErrorStatus } from './constants.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

//Admin
const getAllAppointmentsForAdmin = async (req, res) => {
  const data = await Appointment.aggregate([
    {
      $project: {
        _id: 1,
        pId: 1,
        firstName: 1,
        lastName: 1,
        gender: 1,
        email: 1,
        contact: 1,
        doctorName: 1,
        consultancyFees: 1,
        appDate: 1,
        appTime: 1,
        currentStatus: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({
    status: 'success',
    data,
  });
};
//Doctor
const getAllAppointmentForDoctor = async (req, res) => {
  const data = await Appointment.aggregate([
    {
      $project: {
        _id: 1,
        pId: 1,
        firstName: 1,
        lastName: 1,
        gender: 1,
        email: 1,
        contact: 1,
        appDate: 1,
        appTime: 1,
        currentStatus: 1,
      },
    },
  ]);
  // SEND RESPONSE
  res.status(StatusCodes.OK).json({
    status: 'success',
    data,
  });
};
//Doctor
const getAppointmentPrescriptionList = async (req, res) => {
  const data = await appointments.aggregate([
    {
      $project: {
        pId: 1,
        firstName: 1,
        LastName: 1,
        appDate: 1,
        appTime: 1,
        _id: 0,
      },
    },
    {
      $lookup: {
        from: 'doctors',
        localField: 'pId',
        foreignField: 'pId',
        as: 'Prescription',
      },
    },
    { $unwind: '$Prescription' },
  ]);
  res.status(StatusCodes.OK).json({
    status: 'success',
    data,
  });
};
//Doctor
const cancelAppointmentStatusByDoctor = async (req, res) => {
  const statusName = Object.keys(currentStatus).find(
    (key) => currentStatus[key] == req.body.Status
  );

  const data = await Appointment.findOneAndUpdate(
    {
      _id: req.body.AppointmentId,
    },
    { $set: { currentStatus: statusName } },
    { new: true }
  ); //condition
  res.status(StatusCodes.OK).json({
    status: 'success',
    data,
  });
};
//Patient
const cancelAppointmentStatusByPatient = async (req, res) => {
  const statusName = Object.keys(currentStatus).find(
    (key) => currentStatus[key] == req.body.Status
  );
  const data = await Appointment.findOneAndUpdate(
    {
      _id: req.body.AppointmentId,
    },
    { $set: { currentStatus: statusName } },
    { new: true }
  );
  res.status(StatusCodes.OK).json({
    status: 'success',
    data,
  });
};
//Patient
const getAppointmentByPatientId = async (req, res) => {
  const { pId: patientId } = req.params;
  const data = await Appointment.find({ pId: patientId });
  if (!data) {
    throw new NotFoundError(`No patient with id :${patientId}`);
  }
  res.status(StatusCodes.OK).json({
    status: 'Success',
    data,
  });
};
//Patient
const createAppointment = async (req, res, next) => {
  try {
    const {
      pId,
      specialization,
      doctorName,
      consultancyFees,
      appTime,
      appDate,
    } = req.body;
   
    const data = await Appointment.create(req.body);
    res.status(StatusCodes.OK).json({
      status: 'success',
      data,
    });
  } catch (err) {
    next(err);
  }
};
//Admin
const getAppointmentByContact = async (req, res) => {
  const { contact: appointmentContact } = req.params;
  const data = await Appointment.findOne({
    contact: appointmentContact,
  });
  if (!data) {
    throw new NotFoundError(`No appointment with id :${appointmentContact}`);
  }
  res.status(StatusCodes.OK).json({
    status: 'success',
    data,
  });
};

export {
  getAppointmentPrescriptionList,
  cancelAppointmentStatusByDoctor,
  cancelAppointmentStatusByPatient,
  getAllAppointmentForDoctor,
  getAllAppointmentsForAdmin,
  getAppointmentByPatientId,
  createAppointment,
  getAppointmentByContact,
};
