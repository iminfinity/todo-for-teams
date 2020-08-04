const router = require("express").Router();
const Todo = require("../models/todo.model");

router.route("/").get((req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/add").post((req, res) => {
  const task = req.body.task;
  const newTask = new Todo({
    task,
  });

  newTask
    .save()
    .then(() => res.json("Saved"))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/delete/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task Deleted"))
    .catch((error) => escape.status(400).json("Error:" + error));
});

router.route("/update/:id").post((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.task = req.body.task;
      todo
        .save()
        .then(() => res.json("Updated"))
        .catch((error) => res.status(400).json("Error:" + error));
    })
    .catch((error) => res.status(400).json("Error:" + error));
});
module.exports = router;
