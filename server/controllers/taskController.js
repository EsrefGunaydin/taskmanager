const { Task } = require("../models/task.model");

module.exports = {
  // C
  createTask: (req, res) => {
    const { title } = req.body;
    const newTitle = {
      title,
      created: new Date(),
    };

    Task.create(newTitle)
      .then((data) => res.json({ message: "success", data: data }))
      .catch((err) => res.json({ message: "error", data: err }));
  },

  findTask: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .then((data) => res.json({ data }))
      .catch((err) => res.json({ err }));
  },

  allTasks: (req, res) => {
    Task.find()
      .then((data) => res.json({ data }))
      .catch((err) => res.json({ err }));
  },
  deleteTask: (req, res) => {
    Task.deleteOne({ _id: req.params.id })
      .then((data) => res.json({ data }))
      .catch((err) => res.json({ err }));
  },

  updateTask: (req, res) => {
    console.log(req.body);
    const { title } = req.body;
    const newTitle = {
      title,
      created: new Date(),
    };
    Task.findOneAndUpdate({ _id: req.params.id }, newTitle, { new: true, runValidators: true })
      .then((data) => res.json({ message: "success", data: data }))
      .catch((err) => res.json({ message: "error", data: err }));
  },
};
