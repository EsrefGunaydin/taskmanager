const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB_URL;
const client = mongoose.connect(uri);

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect((err) => {
//   const collection = client.db("taskmanager").collection("tasks");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = client;
