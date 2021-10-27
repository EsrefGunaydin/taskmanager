const express = require("express");
const app = express();
const cors = require("cors");
require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.listen(5000, () => console.log("App is working on server 5000"));
