const config = require("../config/auth.config");
const db = require("../models");
const Category = db.category;

exports.createCategory = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty"
    });
  }

  // Create Category
  const category = new Category({
    name: req.body.name,
    threads: req.body.threads
  });

  // Save Category in the database
  Category.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while creating the Category."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const name = req.body.name;
  Category.find(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Categories."
      });
    else res.send(data);
  });
};