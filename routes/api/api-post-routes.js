const router = require("express").Router();
const postController = require("../../controllers/post-controller");
const withAuth = require("../../utils/auth");
router.post("/", withAuth, postController.createPost);

module.exports = router;
