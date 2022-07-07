import express from 'express'
const router = express.Router()

import {
  createDoctor,
  deleteDoctorByEmail,
  getAllDoctors
} from '../controllers/doctorController.js'
import {protect} from '../controllers/authController.js'

router.route("/").post(protect, createDoctor).get(protect,getAllDoctors);
// remember about :id
router.route("/:emailId").delete(protect,deleteDoctorByEmail);

export default router
