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

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    let data = await User.findById(id)
    res.json(data)
}

exports.getUserByUserName = async (req, res) => {
    const username = req.params.username;
    let data = await User.find({ username: username })
    res.json(data)
}

exports.getRoleById = async (req, res) => {
    const id = req.params.id;
    let data = await Role.findById(id)
    res.json(data)
}

exports.getRoles= async (req, res) => {
    let data = await Role.find()
    res.json(data)
}


