const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({})
);

module.exports = User;