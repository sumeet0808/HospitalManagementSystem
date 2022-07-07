import mongoose from "mongoose";
const PrescribeSchema = new mongoose.Schema({
  Disease: {
    type: String,
    required: [true, "Enter a disease !"],
  },
  Allergies: {
    type: String,
    required: [true, "Enter a Allergies !"],
  },
  Prescription: {
    type: String,
    required: [true, "Enter a Prescription !"],
  },
  pid: {
    type: String,
    required: [true, "Enter a pid !"],
  },
});
export default mongoose.model("Prescribe", PrescribeSchema);
