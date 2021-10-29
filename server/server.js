const express = require("express");
require("./config/database");
require("dotenv").config();
const app = express();
const cors = require("cors");
const {
  createTask,
  findTask,
  allTasks,
  deleteTask,
  updateTask,
} = require("./controllers/taskController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome page");
});
app.post("/api/task", createTask);
app.get("/api/task/", allTasks);
app.get("/api/task/:id", findTask);
app.put("/api/task/update/:id", updateTask);
app.delete("/api/task/delete/:id", deleteTask);

app.listen(5000, () => console.log("App is working on server 5000"));
