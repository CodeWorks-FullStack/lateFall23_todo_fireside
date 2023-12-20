import { Schema } from "mongoose";

export const ToDoSchema = new Schema(
  {
    description: { type: String, required: true, minlength: 3, maxlength: 30 },
    completed: { type: Boolean, default: false },
    name: { type: String, default: 'Jerms, First of his name, ruler of all kittens', maxlength: 100 }
  },
  { timestamps: true }
)