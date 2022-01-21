const config = require("../config/auth.config");
const {
  user
} = require("../models");
const db = require("../models");
const Thread = db.thread;

exports.postThread = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty"
    });
  }

  // Create Thread
  const thread = new Thread({
    threadStarter: req.body.threadStarter,
    category: req.body.category,
    title: req.body.title,
    firstPost: req.body.firstPost
  });

  // Save Thread in the database
  Thread.create(thread, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while creating the Thread."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const title = req.body.title;
  Thread.find(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Threads."
      });
    else res.send(data);
  });
};

exports.findOneThread = (req, res) => {
  Thread.findById(req.params.id, (err, data) => {
    if(err) {
      if(err.kind === "not_found") {
        res.status(400).send({
          message: `Not found Thread with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data)
  });
}

exports.findAllByCategory = (req, res) => {
  Thread.find({
    category: req.params.category
  }, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Thread with id ${req.params.category}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Thread with id " + req.params.category
        });
      }
    } else res.send(data);
  });
};
exports.findUsersThreads = (req, res) => {
  Thread.find({
      threadStarter: req.params.id
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

exports.delete = (req, res) => {

  Thread.findOne({
    threadStarter: req.body.threadStarter
  }).exec((err, thread) => {
    if (err) {
      res.status(500).send({
        message: err
      });
      return;
    }

    if (thread) {

      if (req.body.threadStarter == "") {
        return res.status(400).send({
          message: "threadStarter cannot be empty"
        });
      } else if (!req.body.threadStarter) {
        return res.status(404).send({
          message: "threadStarter does not exist..."
        });
      } else {
        Thread.findByIdAndRemove(req.params.id, (err) => {
          if (err) {
            if (err.kind === "not_found") {
              return res.status(404).send({
                message: `Not found Thread.`
              });
            } else {
              return res.status(500).send({
                message: "Could not delete Thread with id "
              });
            }
          } else res.send({
            message: `Thread was deleted successfully!`
          });
        });

      }
    }

  })

};