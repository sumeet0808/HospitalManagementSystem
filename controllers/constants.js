import appointments from "../models/appointmentModel.js";
export const currentStatus = {
  Invalid: 0,
  Active: 1,
  CancelledByDoctor: 2,
  CancelledByPatients: 3,
  PrescriptionDone: 4,
};
