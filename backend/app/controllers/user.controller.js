const db = require("../models");
let User = db.user;
const Role = db.role;


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.")
};

exports.userBoard = (req, res) => {
        res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.getAllUsers = async(req, res) => {
    let data = await User.find()
    res.json(data)
}