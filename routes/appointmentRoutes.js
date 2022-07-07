import express from 'express'
const router = express.Router()

import {
  getAppointmentPrescriptionList,
  cancleAppointmentStatus,
  getAllAppointmentForDoctor,
  getAllAppointmentsForAdmin,
  getAppointmentByFields,
  getAllAppointmentsForPatient,
  createAppointment,
} from "../controllers/appointmentController.js";
import { protect } from "../controllers/authController.js";


router
  .route("/")
  .get(protect,getAllAppointmentsForAdmin).get(getAppointmentPrescriptionList)
router.route("/getAllAppointment").get(getAllAppointmentForDoctor);
router.route("/cancelAppointment").post(cancleAppointmentStatus);
router.route('/getAppointmentByFields').get(getAppointmentByFields);
router.route("/getallappointments").get(getAllAppointmentsForPatient);
router.route("/createAppointment").post(createAppointment);
// // remember about :id
// router.route('/:emailId').delete(deleteDoctorByEmail)

export default router
