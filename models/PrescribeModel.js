import mongoose from 'mongoose';
import { ErrorStatus } from '../controllers/constants.js';
const PrescribeSchema = new mongoose.Schema({
  disease: {
    type: String,
    required: [true, ErrorStatus.enterDisease],
  },
  allergies: {
    type: String,
    required: [true, ErrorStatus.enterAllergies],
  },
  prescription: {
    type: String,
    required: [true, ErrorStatus.enterPrescription],
  },
  pId: {
    type: String,
    required: [true, "Enter a pid !"],
    unique: true,
  },
});
export default mongoose.model('Prescribe', PrescribeSchema);
