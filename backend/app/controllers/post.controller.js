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

    // Save Post in the database
    Post.create(post, (err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the Post."
        });
        else res.send(data);
    });
};

/* exports.delete = (req, res) => {
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
}; */

exports.delete = (req, res) => {

    Post.findOne({
        creator: req.body.creator
    }).exec((err, post) => {
        if (err) {
            res.status(500).send({
                message: err
            });
            return;
        }

        if (post) {
            if (req.body.creator == "") {
                return res.status(400).send({
                    message: "creator cannot be empty"
                });
            } else if (!req.body.creator) {
                return res.status(404).send({
                    message: "creator does not exist..."
                });
            } else {
                Post.findByIdAndRemove(req.params.id, (err) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            return res.status(404).send({
                                message: "Not found post."
                            });
                        } else {
                            return res.status(500).send({
                                message: "Could not delete post with id "
                            });
                        }
                    } else {
                        Post.find({
                            creator: req.body.creator
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
                });

            }
        }

    })

};

exports.getMyPosts = (req, res) => {
    Post.find({
        creator: req.params.id
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

exports.findAllByThreadId = (req, res) => {
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