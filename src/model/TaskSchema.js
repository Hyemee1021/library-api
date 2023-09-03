import mongoose from "mongoose";

//Schema creates a table
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  hr: {
    type: Number,
    required: true,
  },
  type: {
    type: String,

    default: "entry",
  },
});

//creating a tablename, Schema name
export default mongoose.model("Task", taskSchema);
