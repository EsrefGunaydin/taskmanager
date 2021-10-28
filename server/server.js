const express = require("express");
require("./config/database");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { createTask, findTask } = require("./controllers/taskController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome page");
});
app.post("/api/coin", createTask);
app.get("/api/coin/:id", findTask);

app.listen(5000, () => console.log("App is working on server 5000"));
