const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models"); 
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if(!token) {
        return res.
    }
}