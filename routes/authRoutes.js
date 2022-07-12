import express from "express";
const router = express.Router();

import {
  register,
  patientLogin,
  doctorLogin,
  adminLogin,
} from "../controllers/authController.js";

import authenticateUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/patientLogin").post(patientLogin);
router.route("/doctorLogin").post(doctorLogin);
router.route("/adminLogin").post(adminLogin);

export default router;
