const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  userId: String, //species,the user can see the tasks he created
  priority: String,
});

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

module.exports = Task;