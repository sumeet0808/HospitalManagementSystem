import express from "express";
const router = express.Router();

import {
  createPrescription,
  getAllPatientPrescriptionForAdmin,
  getAllPatientPrescriptionForDoctor,
} from "../controllers/prescribeController.js";

router.route("/createPrescription/:pId").post(createPrescription);
router
  .route("/getAllPatientPrescriptionForAdmin")
  .get(getAllPatientPrescriptionForAdmin);

router
  .route("/getAllPatientPrescriptionForDoctor")
  .get(getAllPatientPrescriptionForDoctor);
export default router;
