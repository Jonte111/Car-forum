const mongoose = require("mongoose");

let current = new Date();
let timeStamp = new Date(Date.UTC(current.getFullYear(),
    current.getMonth(), current.getDate(), current.getHours(),
    current.getMinutes(), current.getSeconds(), current.getMilliseconds()));

const Thread = mongoose.model(
    "Thread",
    new mongoose.Schema({
        threadStarter: {
            type: String,
            required: true
        },
        threadStarterUsername: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        firstPost: {
            type: String,
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        createdTime: {
            type: Date,
            default: timeStamp

        },
        blockedUsers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }],
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: []
        }],
        adminLocked: {
            type: Boolean,
            default: false
        },
        threadStarterLocked: {
            type: Boolean,
            default: false
        }
    })
);

module.exports = Thread;