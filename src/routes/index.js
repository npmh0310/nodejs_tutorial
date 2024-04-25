const newRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");
function route(app) {
  app.use("/courses", courseRouter);
  app.use("/news", newRouter);
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     console.log(req.body);
  //     res.send("search successfully");
  //   });
}

module.exports = route;
