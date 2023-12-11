import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    ejemplar: {
      type: mongoose.Types.ObjectId,
      ref: "Ejemplar",
    },
    document: {
      type: mongoose.Types.ObjectId,
      ref: "Document",
    },
    reservationDate: {
      type: Date,
      default: Date.now,
    },
    pickedUpOn: {
      type: Date,
    },
    returnBy: {
      type: Date,
      default: Date.now() + (6.048e+8 * 2),
    },
    returnedAt: {
      type: Date,
    },
    returned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Reservation", reservationSchema);