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
        postText: req.body.postText
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