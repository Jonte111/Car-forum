const config = require("../config/auth.config");
const db = require("../models");
let User = db.user;
const Role = db.role;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
const { user } = require("../models");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        confirmPassword: bcrypt.hashSync(req.body.password, 8),
        moderatorBlocked: req.body.moderatorBlocked
    });

    user.save((err, user) => {
        if(err) {
            res.status(500).send({ message: err });
            return;
        }

        if(req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles }
                }, 
                (err, roles) => {
                    if(err) {
                        res.status(500).send({ message: err });
                        return; 
                    }

                    user.roles = roles.map(role => role._id);
                    user.save(err => {
                        if(err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({ message: "User was registered successfully! "});
                    });
                }
            );
        } else {
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = [role._id];
                user.save(err => {
                    if(err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
    });
};

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
    .populate("roles", "-__v")
    .exec((err, user) => {
        if(err) {
            res.status(500).send({ message: err });
            return;
        }

        if(!user) {
            return res.status(404).send({ message: "User Not Found." });
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Bad Credentials..."
            });
        }

        if(user.moderatorBlocked) {
            return res.status(403).send({
                accessToken: null,
                message: "This account has been blocked by moderator."
            });
        }
    

        let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        let authorities = [];

        for(let i = 0; i < user.roles.length; i++) {
            authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        }
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token
        });
    });
};

exports.delete = (req, res) => {
const id = req.params.id;

User.findById(id)
    .then(user => {
        if(!user) {
            return res.status(400).send({
                message: `Cannot delete User with id=${id}. Maybe user was not found!`
            });

         
        } 
        
        let passIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passIsValid) {
            return res.status(401).send({
                message: `Could not delete ${id} Bad Credentials...`
            });
        }
    
        else {
            User.findByIdAndRemove(id, function (err) {
                if (err){
                    res.status(500).send({ message: err });
                    return;
                }
                else{
                    return res.status(200).send({
                        message: `User deleted ${id}`
                    });
                    
                    
                }
            });
            }
    })
    .catch(err => {
        return res.status(500).send({
            message: "Could not delete User with id= " + id
        });
    });

};

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `Cannot update User with id=${id}. Maybe user was not found!`
            });
        }  else {
            res.send({ message: "User was updated successfully." });
        }
    }) 
    .catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    });
    
};