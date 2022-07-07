import Prescribe from "../models/PrescribeModel.js";
import { StatusCodes } from "http-status-codes";
import appointments from "../models/AppointmentModel.js";
// import prescribes from "../models/PrescribeModel.js";

const createPrescription = async (req, res) => {
  //const { Disease, Allergies, Prescription } = req.body;
  try {
    const Prescription = await doctors.create({
      Disease: req.body.Disease,
      Allergies: req.body.Allergies,
      Prescription: req.body.Prescription,
      pid: req.params.pid,
    });

    res.status(StatusCodes.CREATED).json({
      Prescription: {
        Disease: Prescription.Disease,
        Allergies: Prescription.Allergies,
        Prescription: Prescription.Prescription,
      },
    });
  } catch (error) {
    if (error.message.indexOf("11000") != -1) {
      res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Duplicate patient Id ",
      });
    }
  }
};

const getAllPrescribe = async (req, res) => {
  const prescribe = await appointments.aggregate([
    {
      $project: {
        doctorName: 1,
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
        from: "prescribes",
        localField: "pid",
        foreignField: "pid",
        as: "Prescription",
      },
    },
    { $unwind: "$Prescription" },
   
  ]);
  res.status(200).json({
    status: "success",
    prescribe  
  });
};

export { createPrescription, getAllPrescribe };
