import express from "express";
const router = express.Router();

import {
  createQueries,
  getAllQueries,
  getQueriesByContact,
} from "../controllers/contactController.js";
// import { protect } from "../controllers/authController.js";

router.route("/createQueries").post(createQueries);
// router.route("/getAllQueries").get(protect, getAllQueries);
router.route("/getAllQueries").get(getAllQueries);

// router.route("/getQueriesByContact/:contact").get(protect, getQueriesByContact);
router.route("/getQueriesByContact/:contact").get(getQueriesByContact);

export default router;
