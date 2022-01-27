const controller = require("../controllers/post.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
        next();
    });

    // create a new Post
    app.post("/api/post/create", controller.createPost);
    app.delete("/api/post/delete/:id", controller.delete);

    //Get posts by threadId
    app.get("/api/post/:id", controller.findAllByThreadId);

    app.get("/api/my-posts/:id", controller.getMyPosts)
}