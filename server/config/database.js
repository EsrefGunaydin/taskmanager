const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://user-taskmanager:cGZU7gDTMuA8hJa@cluster0.q2jgc.mongodb.net/taskmanager?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  const collection = client.db("taskmanager").collection("tasks");
  // perform actions on the collection object
  console.log("connection established");
  client.close();
});

module.exports = client;
