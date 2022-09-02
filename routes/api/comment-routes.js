const router = require("express").Router();
const withAuth = require("../../utils/auth");
const commentController = require("../../controllers/comment-controller");

router.post("/", withAuth, commentController.createComment);

module.exports = router;
