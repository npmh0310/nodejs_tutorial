const express = require("express");
const router = express.Router();
// Call controller
const courseController = require("../app/controllers/CourseController");
// [GET] /courses/:slug

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;
