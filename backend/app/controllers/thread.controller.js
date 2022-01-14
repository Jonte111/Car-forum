const db = require("../models");
let Thread = db.thread;

exports.uploadThread = (req, res) => {
  const thread = new Thread({
    threadStarter = req.body.id,
    posts = req.body.posts,
    postAmount = req.body.postAmount,
    title = req.body.title,
    createdTime = req.body.createdTime,
    comments = req.body.comments,
    commentsAmount = req.body.commentsAmount,
    blockedUsers = req.body.blockedUsers,
    adminLocked = req.body.adminLocked,
    threadStarterLocked = req.body.threadStarterLocked
  });

  thread.save((err, thread) => {
    if(err) {
      res.status(500).send({message: err});
      return;
    }

    thread.save();
  });
}

exports.deleteThread = (req, res) => {
  const id = req.params.id;

  Thread.findById(id)
    .then(() => {
      Thread.findByIdAndDelete(id, function(err) {
        if(err) {
          res.status(500).send({message: err});
        } else {
          return res.status(200).send({
            message: `Deleted thread - id ${id}`
          });
        }
      });
    }).catch(err => {
      return res.status(500).send({
        message: "Could not delete thread - id " + id
      });
    });
}