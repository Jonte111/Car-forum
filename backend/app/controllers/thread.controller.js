const config = require("../config/auth.config");
const db = require("../models");
const Thread = db.thread;

exports.postThread = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }

    // Create Thread
    const thread = new Thread({
        threadStarter: req.body.threadStarter,
        category: req.body.category,
        title: req.body.title
    });

    // Save Thread in the database
    Thread.create(thread, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the Thread."
        });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
  const title = req.body.title;
  Thread.find(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Threads."
      });
    else res.send(data);
  });
};

// find by category
exports.findAllByCategory = (req, res) => {
  const category = req.body.category;
  Thread.find(category, (err, data) => {
    if(err)
    res.status(500).send({
      message:
      err.message || "Some error occurred while retrieving Threads by Category."
    });
    else res.send(data);
  });
}

exports.delete = (req, res) => {
    Thread.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Thread with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Thread with id " + req.params.id
          });
        }
      } else res.send({ message: `Thread was deleted successfully!` });
    });
  };