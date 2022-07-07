import Appointment from "../models/AppointmentModel.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import connectDB from "../db/connect.js";

//Admin
const getAllAppointmentsForAdmin = async (req, res) => {
  const appointment = await Appointment.aggregate([
    {
      $project: {
        _id:0,
         pid: 1,
         ID: 1,
        fname: 1,
        lname: 1,
        gender:1,
        email:1,
        contact:1,
        doctorName:1,
        docFees:1,                
        appdate: 1,
        apptime: 1,
        currentStatus:1,
      },
    },
    ]);
  res.status(200).json({
    status: "success",    
    appointment,  
  });
};
//Doctor
const getAllAppointmentForDoctor = async (req, res) => {
  const appointments = await Appointment.aggregate([
    {
      $project: {
        pid: 1,
        ID: 1,
        fname: 1,
        lname: 1,
        gender: 1,
        email: 1,
        contact: 1,
        appdate: 1,
        apptime: 1,
        currentStatus: 1,
      },
    },
  ]);
  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    data: {
      appointments,
    },
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
    status: "success",
    data,
  });
};
//Doctor
const cancleAppointmentStatus = async (req, res) => {
  console.log("Inside Status", currentStatus);
  const statusName = Object.keys(currentStatus).find(
    (key) => currentStatus[key] == req.body.Status
  );
  console.log("statusName", statusName);
  console.log("reqbody......", req.body);
  const data = await appointments.findOneAndUpdate(
    {
      _id: req.body.AppoinmentID,
    },
    { $set: { currentStatus: statusName } },
    { new: true }
  ); //condition
  res.status(200).json({
    status: "success",
    data,
  });
};
//Admin
const getAppointmentByFields = async (req, res) => {
  const appointment = await Appointment.aggregate([
    {
      $project: {
        firstName: 1,
        lastName: 1,
        contact: 1,
        email: 1,
        appointmentDate: 1,
        appointmentTime: 1,
        _id: 0,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ status: "success", appointment });
};

//Patient
const getappointmentByPatientId = async (req, res) => {
  //const appointmentId = req.params.id
  const appointment = await Appointment.find(req.params.pId);
  // if(!appointmentId)
  // {
  //     res.send(404)
  //     //throw new CustomAPIError('Appointment Not Found')
  // }
  res.status(StatusCodes.OK).json({ appointment });
};
//Patient
const getAllAppointmentsForPatient = async (req, res) => {
  // NO AWAIT

  let result = BookAppointment.find();
  const appointnment = await result;
  res.status(StatusCodes.OK).json(appointnment);
};
//Patient
const createAppointment = async (req, res, next) => {
  try {
    const { specialization, doctors, docFees, date, time } = req.body;
    if (!specialization || !doctors || !date || !time) {
      throw new BadRequestError("Please Provide All Fields");
    }
    const appointment = await BookAppointment.create(req.body);
    res.status(StatusCodes.OK).json(appointment);
  } catch (err) {
    next(err);
  }
};

export {
  getAppointmentPrescriptionList,
  cancleAppointmentStatus,
  getAllAppointmentForDoctor,
  getAllAppointmentsForAdmin,
  getAppointmentByFields,
  getappointmentByPatientId,
  getAllAppointmentsForPatient,
  createAppointment,
};
