const mongoose = require("mongoose");

const Thread = mongoose.model(
  "Thread",
  new mongoose.Schema({
    threadStarter: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User"
    },
    posts: [
      {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Post"
      }
    ],
    postAmount: {
      type: Number,
      integer: true
    },
    title: {
      type: String,
      required: true
    },
    createdTime: {
      type: Date
    },
    comments: [
      {
        type: String,
        createdTime: Date,
        commentator: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ],
    commentsAmount: {
      type: Number,
      integer: true
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