import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        default: 2023
    },
    type: {
        type: Number,
        required: true,
        default: 1
    },
    genre: {
        type: Number,
        required: true,
        default: 1
    },
    img: {
      type: String,
      required: true,
      default: "https://i.pinimg.com/736x/b8/bd/3f/b8bd3f935d3c7270a454da6903096706.jpg"
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    stock: {
      type: Number,
      required: true,
      default: 0
    },
    desc: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
);

export default mongoose.model("Document", documentSchema);
