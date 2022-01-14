const { user } = require("../models");
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;


checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if(err) {
            res.status(500).send({ message: err });
            return;
        }

        if(user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }

        // Email
        User.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if(err) {
                res.status(500).send({ message: err });
                return;
            }

            if(user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
            }

            next();
        });
    });
};


checkPasswords = (req, res, next) => {
   // let regix = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(req.body.password != req.body.confirmPassword) {
        res.status(400).send({ message: "password not match" });
        return;
    }
    
    else if(req.body.password == "") {
        res.status(400).send({ message: "Password cannot be empty"});
        return;
    }
    
    // else if(regix.test(req.body.password) == false) {
    //     res.status(400).send({ message: "Password must be a minimum of 8 characters including number, Upper, Lower And one special character"});
    //     return;
    // }
    next();
};

checkRolesExisted = (req, res, next) => {
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted,
    checkPasswords
};

module.exports = verifySignUp;