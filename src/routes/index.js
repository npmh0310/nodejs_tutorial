const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {

  app.use("/news", newRouter);
  app.use("/", siteRouter);


//   app.post("/search", (req, res) => {
//     console.log(req.body);
//     res.send("search successfully");
//   });
}

module.exports = route;
