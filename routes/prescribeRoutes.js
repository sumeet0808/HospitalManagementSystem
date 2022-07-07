import express from 'express'
const router = express.Router()

import {
  createPrescription,
  getAllPrescribe,
} from "../controllers/prescribeController.js";
import { protect } from "../controllers/authController.js";

router.route("/").post(createPrescription).get(protect, getAllPrescribe);

export default router;
