import Appointment from "../models/AppointmentModel.js";
import Doctor from "../models/DoctorModel.js";
import Patient from "../models/PatientModel.js";
import { currentStatus } from "./constants.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import connectDB from "../db/connect.js";

//Admin
//asdfghjklwertyuiojhgfdszxcvnmnvcxfghjhgfdfghjjhgfdfghjasd
const getAllAppointmentsForAdmin = async (req, res) => {
  const appointment = await Appointment.aggregate([
    {
      $project: {
        _id: 0,
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
  res.status(200).json({
    status: "Success",
    appointment,
  });
};
//Doctor
const getAllAppointmentForDoctor = async (req, res) => {
  const appointments = await Appointment.aggregate([
    {
      $project: {
        _id: 0,
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
  res.status(200).json({
    status: "Success",
    total: appointments.length,
    appointments,
  });
};
//Doctor
const getAppointmentPrescriptionList = async (req, res) => {
  const data = await appointments.aggregate([
    {
      $project: {
        pid: 1,
        fname: 1,
        lname: 1,
        ID: 1,
        appdate: 1,
        apptime: 1,
        _id: 0,
      },
    },
    {
      $lookup: {
        from: "doctors",
        localField: "pid",
        foreignField: "pid",
        as: "Prescription",
      },
    },
    { $unwind: "$Prescription" },
  ]);
  // const result = await console.log("getAllList", getAllList);
  res.status(200).json({
    status: "Success",
    data,
  });
};
//Doctor
const cancelAppointmentStatusByDoctor = async (req, res) => {
  console.log("Inside Status", currentStatus);
  const statusName = Object.keys(currentStatus).find(
    (key) => currentStatus[key] == req.body.Status
  );
  console.log("statusName", statusName);
  console.log("reqbody......", req.body);
  const data = await Appointment.findOneAndUpdate(
    {
      _id: req.body,
    },
    { $set: { currentStatus: statusName } },
    { new: true }
  ); //condition
  res.status(200).json({
    status: "Success",
    data,
  });
};


const cancelAppointmentStatusByPatient = async (req, res) => {
  console.log("Inside Status", currentStatus);
  const statusName = Object.keys(currentStatus).find(
    (key) => currentStatus[key] == req.body.Status
  );
  console.log("statusName", statusName);
  console.log("reqbody......", req.body);
  const data = await Appointment.findOneAndUpdate(
    {
      _id: req.body.AppointmentId,
    },
    { $set: { currentStatus: statusName } },
    { new: true }
  ); //condition
  res.status(200).json({
    status: "Success",
    data,
  });
};




//Patient
const getAppointmentByPatientId = async (req, res) => {
  const { pId: patientId } = req.params;
  const patient = await Appointment.find({ pId: patientId });
  if (!patient) {
    throw new NotFoundError(`No patient with id :${patientId}`);
  }
  res.json({
    status: "Success",
    total: patient.length,
    patient,
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
    if (
      !pId ||
      !specialization ||
      !doctorName ||
      !consultancyFees ||
      !appTime ||
      !appDate
    ) {
      throw new BadRequestError("Please Provide All Fields");
    }
    const appointment = await Appointment.create(req.body);
    res.status(StatusCodes.OK).json({
      Status: "Success",
      Total: appointment.length,
      appointment,
    });
  } catch (err) {
    next(err);
  }
};

// const createAppointment = async (req, res) => {
//   const data = await Appointment.aggregate([
//     {
//       $project: {
//         pid: 1,
//         fname: 1,
//         lname: 1,
//         ID: 1,
//         appdate: 1,
//         apptime: 1,
//         _id: 0,
//       },
//     },
//     {
//       $lookup: {
//         from: "doctors",
//         localField: "pid",
//         foreignField: "pid",
//         as: "Prescription",
//       },
//     },
//     { $unwind: "$Prescription" },
//   ]);
//   // const result = await console.log("getAllList", getAllList);
//   res.status(200).json({
//     status: "Success",
//     data,
//   });
// };

export {
  getAppointmentPrescriptionList,
  cancelAppointmentStatusByDoctor,
  cancelAppointmentStatusByPatient,
  getAllAppointmentForDoctor,
  getAllAppointmentsForAdmin,
  getAppointmentByPatientId,
  createAppointment,
};
