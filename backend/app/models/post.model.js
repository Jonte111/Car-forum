const mongoose = require("mongoose");

let current  = new Date();
let timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));


const Post = mongoose.model(
    "Post",
    new mongoose.Schema({
        threadId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread"
        },
        postedTime: {
            type: Date,
            default: timeStamp
        }, 
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }, 
        postText: {
            type: String,
            required: true
        }

    })
);

module.exports = Post;