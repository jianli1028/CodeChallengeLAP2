const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");


router.post("/", postsController.create);

module.exports = router;