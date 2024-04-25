const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  // [GET] /courses/:slug
  show(req, res) {
    //? req.params.slug: lấy param từ đường dẫn
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      //? course/show dựa trên file trong folder
      .catch((err) => res.send(err));
  }

  //[GET] /courses/create
  create(req, res) {
    res.render("courses/create");
  }
  //[POST] /courses/store
  store(req, res) {
    // res.json(req.body);
    //* xử lý thêm videoId vào đường dẫn image
    const formDate = req.body;
    formDate.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB042yvsDfULxhV4tcx0tbMLmsX7w`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => res.render("error"));
  }
}

module.exports = new CourseController();
