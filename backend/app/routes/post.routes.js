const controller = require("../controllers/post.controller");

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
        next();
    });

    app.get("/api/posts", controller.findAll); // get all posts

    app.get("/api/my-posts/:id", controller.findUsersPosts); // this is my posts

    // create a new Post
    app.post("/api/post/create", controller.createPost);

    app.delete("/api/post/delete/:id", controller.delete);
}