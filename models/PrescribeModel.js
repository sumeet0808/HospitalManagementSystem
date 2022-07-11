import mongoose from "mongoose";
const PrescribeSchema = new mongoose.Schema({
  disease: {
    type: String,
    required: [true, "Enter a disease !"],
  },
  allergies: {
    type: String,
    required: [true, "Enter a Allergies !"],
  },
  prescription: {
    type: String,
    required: [true, "Enter a Prescription !"],
  },
  pId: {
    type: String,
    required: [true, "Enter a pid !"],
  },
});
export default mongoose.model("Prescribe", PrescribeSchema);
