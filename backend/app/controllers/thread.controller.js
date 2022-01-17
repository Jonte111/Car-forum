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
        title: req.body.title,
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