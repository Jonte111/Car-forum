const mongoose = require("mongoose");

const Category = mongoose.model(
    "Category",
    new mongoose.Schema({
      name: String,
      threads: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
            default: []
          }
      ]
    })
  );
  
  module.exports = Category;