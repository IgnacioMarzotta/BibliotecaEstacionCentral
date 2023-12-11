import mongoose from "mongoose";

const ejemplarSchema = new mongoose.Schema(
  {
    document: {
      type: mongoose.Types.ObjectId,
      ref: "Document",
    },
    available: {
        type: Boolean,
        default: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ejemplar", ejemplarSchema);