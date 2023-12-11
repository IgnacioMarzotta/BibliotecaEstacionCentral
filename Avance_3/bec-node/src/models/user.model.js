import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstnames: {
      type: String,
      required: true,
    },
    lastnames: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Number,
      required: true,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
