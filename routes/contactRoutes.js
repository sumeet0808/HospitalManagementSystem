import express from 'express'
const router = express.Router()

import {
    createQueries,
    getAllQueries,
    getQuerieByContact,
} from '../controllers/contactController.js'
import { protect } from "../controllers/authController.js";


router.route("/").post(createQueries).get(protect,getAllQueries);
router.route("/:contact").get(protect,getQuerieByContact);

export default router
