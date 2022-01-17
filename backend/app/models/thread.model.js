const mongoose = require("mongoose");
const moment = require('moment-timezone');

let current  = new Date();
let timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));

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
            default: timeStamp
         
        },
        blockedUsers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                default: []
            }
        ],
        posts: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: []
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