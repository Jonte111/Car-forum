const {
    authJwt
} = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //get all users
    app.get("/api/users", controller.getAllUsers);

    //get user by id
    app.get("/api/users/:id", controller.getUserById);

    //get user by username
    app.get("/api/users/username/:username", controller.getUserByUserName);

    //get role by id
    app.get("/api/roles/:id", controller.getRoleById);

    //get roles
    app.get("/api/roles", controller.getRoles);


};