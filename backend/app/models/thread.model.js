const mongoose = require("mongoose");

const Thread = mongoose.model(
    "Thread",
    new mongoose.Schema({
        threadStarter: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title: {
            type: String,
            required: true
        },
        createdTime: {
            type: Date,
            default: Date.now
        },
        blockedUsers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
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