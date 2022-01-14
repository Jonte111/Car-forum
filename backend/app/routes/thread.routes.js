const controller = require("../controllers/thread.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // category som parameter?
  app.post("/api/threads", controller.createThread);

  app.delete("/api/threads/id", controller.deleteThread);
}