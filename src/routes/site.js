const express = require("express");
const router = express.Router();
// Call controller
const siteController = require("../app/controllers/SiteController");

router.use("/search", siteController.search);
router.use("/", siteController.index);

module.exports = router;
