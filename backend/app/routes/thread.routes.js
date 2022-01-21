const controller = require("../controllers/thread.controller");

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
        next();
    });

    app.get("/api/threads", controller.findAll);

    // find thread by category
    app.get("/api/threads/byCategory/:category", controller.findAllByCategory); 
    app.get("/api/my-threads/:id", controller.findUsersThreads); // this is my threads

    app.get("/api/thread/:id", controller.findOneThread); // find one thread

    app.put("/api/thread/update/:id", controller.update); // update thread by id


    // Create a new Thread
    app.post("/api/thread/create", controller.postThread);

    app.delete("/api/thread/delete/:id", controller.delete);
};