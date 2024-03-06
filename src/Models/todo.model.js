import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps:true
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
