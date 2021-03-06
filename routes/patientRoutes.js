import express from "express";
const router = express.Router();

import {
  getAllPatients,
  getPatientByContact,
  verifyPatientByEmail,
} from "../controllers/patientController.js";
// import { protect } from "../controllers/authController.js";

// router.route("/getAllPatients").get(protect, getAllPatients);
// // remember about :id
// router.route("/getPatientByContact/:contact").get(protect, getPatientByContact);

router.route("/getAllPatients").get(getAllPatients);
// remember about :id
router.route("/getPatientByContact/:phoneNo").get(getPatientByContact);
router.route("/verifyPatientByEmail/:emailId").get(verifyPatientByEmail);


export default router;
