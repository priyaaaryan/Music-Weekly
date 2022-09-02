const router = require("express").Router();
const postController = require("../../controllers/post-controller");

// get all posts
router.get("/", postController.loadAllPostsPage);

router.post("/", postController.createPost);

// get single post
router.get("/post/:id", postController.loadSinglePostPage);
module.exports = router;
