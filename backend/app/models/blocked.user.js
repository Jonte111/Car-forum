const mongoose = require("mongoose");

const BlockedUser = mongoose.model(
    "BlockedUser",
    new mongoose.Schema({
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    })
);

module.exports = BlockedUser;