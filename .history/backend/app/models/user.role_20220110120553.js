const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            maxlength: 20
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: 1
        },
        password: {
            type: String,
            required: true,
            maxlength:8 // change to 8 later
        },
        confirmPassword: {
            type: String,
            required: true,
            maxlength:8
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

module.exports = User;