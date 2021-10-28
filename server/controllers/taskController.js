const { Task } = require("../models/task.model");

module.exports = {
  // C
  createTask: (req, res) => {
    Task.create(req.body)
      .then((data) => res.json({ message: "success", data: data }))
      .catch((err) => res.json({ message: "error", data: err }));
  },

  findTask: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .then((data) => res.json({ data }))
      .catch((err) => res.json({ err }));
  },
};
