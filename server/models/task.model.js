const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  created: {
    type: String,
    required: [true, "Created Date is required"],
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
