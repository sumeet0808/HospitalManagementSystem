import express from "express";
const router = express.Router();

import {
  getAllPatients,
  getPatientByContact,
} from "../controllers/patientController.js";
import { protect } from "../controllers/authController.js";


router.route("/").get(protect,getAllPatients);
// remember about :id
router.route("/:contact").get(protect,getPatientByContact);

export default router;
