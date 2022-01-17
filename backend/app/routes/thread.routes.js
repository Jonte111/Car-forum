const controller = require("../controllers/thread.controller");

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
        next();
    });

    // Create a new Thread
    app.post("/api/thread/create", controller.postThread);
};