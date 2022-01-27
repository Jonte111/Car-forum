const controller = require("../controllers/category.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
        next();

        app.get("/api/categories", controller.findAll);

        // Create a new Category
        app.post("/api/category/create", controller.createCategory);


    });
}