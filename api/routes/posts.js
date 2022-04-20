const express = require("express");
const router = extress.Router();
const postsController = require("../controllers/posts");

router.post("/", postsController.create);

module.exports = router;