const { MongoClient } = require("mongodb");
const uri = DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  const collection = client.db("taskmanager").collection("tasks");
  // perform actions on the collection object
  console.log("connection established");
  client.close();
});

module.exports = client;
