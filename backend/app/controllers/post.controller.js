const config = require("../config/auth.config");
const db = require("../models");
const Post = db.post;

exports.createPost = (req, res ) => {
    // Validable request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }

    // Create Post
    const post = new Post({
        threadId: req.body.threadId,
        creator: req.body.creator,
        postText: req.body.postText,
        username: req.body.username
    });

    // Save Thread in the database
    Post.create(post, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the Thread."
        });
        else res.send(data);
    });
};

exports.delete = (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            if(err.kind === "not_found") {
                res.status(400).send({
                    message: `Not found Post with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                  message: "Could not delete Post with id " + req.params.id
                });
              }
        } else res.send({ message: `Post was deleted successfully!` });
    });
};

exports.findAllByThreadId = (req, res) => {
    console.log(req.params.id, "req.params.id");
    Post.find({
        threadId: req.params.id
    })
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}