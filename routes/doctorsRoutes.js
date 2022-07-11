import express from "express";
const router = express.Router();

import {
  createDoctor,
  deleteDoctorByEmail,
  getAllDoctors,
} from "../controllers/doctorController.js";
// import { protect } from "../controllers/authController.js";

// router.route("/createDoctor").post(protect, createDoctor);
// router.route("/getAllDoctors").get(protect, getAllDoctors);
// // remember about :id
// router
//   .route("/deleteDoctorByEmail/:emailId")
//   .delete(protect, deleteDoctorByEmail);

router.route("/createDoctor").post( createDoctor);
router.route("/getAllDoctors").get( getAllDoctors);
// remember about :id
router
  .route("/deleteDoctorByEmail/:emailId")
  .delete( deleteDoctorByEmail);

export default router;
