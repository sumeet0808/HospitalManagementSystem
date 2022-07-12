import express from "express";
const router = express.Router();

import {
  getAppointmentPrescriptionList,
  cancelAppointmentStatusByDoctor,
  cancelAppointmentStatusByPatient,
  getAllAppointmentForDoctor,
  getAllAppointmentsForAdmin,
  createAppointment,
  getAppointmentByPatientId,
  getAppointmentByContact,
} from "../controllers/appointmentController.js";
//import { protect } from "../controllers/authController.js";

router
  .route("/getAllAppointmentsForAdmin")
  //.get(protect, getAllAppointmentsForAdmin);
  .get(getAllAppointmentsForAdmin);
router
  .route("/getAppointmentPrescriptionList")
  .get(getAppointmentPrescriptionList);
router.route("/getAllAppointmentForDoctor").get(getAllAppointmentForDoctor);
router
  .route("/cancelAppointmentStatusByDoctor")
  .post(cancelAppointmentStatusByDoctor);
router
  .route("/cancelAppointmentStatusByPatient")
  .post(cancelAppointmentStatusByPatient);

router.route("/getAppointmentByPatientId/:pId").get(getAppointmentByPatientId);
router.route("/createAppointment").post(createAppointment);
router.route("/getAppointmentByContact/:contact").get(getAppointmentByContact);

export default router;
