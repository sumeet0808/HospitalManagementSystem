import express from "express";
const router = express.Router();

import {
  createDoctor,
  deleteDoctorByEmail,
  getAllDoctors,
  getDoctorByEmail,
} from "../controllers/doctorController.js";
//import { protect } from "../controllers/authController.js";

router.route("/createDoctor").post(createDoctor);
router.route("/getAllDoctors").get(getAllDoctors);
// remember about :id
router.route("/deleteDoctorByEmail/:emailId").delete(deleteDoctorByEmail);

// router.route("/createDoctor").post(createDoctor);
// router.route("/getAllDoctors").get(getAllDoctors);
// router.route("/deleteDoctorByEmail/:emailId").delete(deleteDoctorByEmail);
// router.route("/getDoctorByEmail/:emailId").get(getDoctorByEmail);

export default router;
