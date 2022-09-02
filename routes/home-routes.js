const router = require("express").Router();
const homeController = require("../controllers/home-controller");

// get all posts for homepage
// router.get("/", (req, res) => {
//     Post.findAll({
//         include: [User],
//     })
//         .then((dbPostData) => {
//             const posts = dbPostData.map((post) => post.get({ plain: true }));

//            // res.render("all-posts", { posts });
//            res.send("Hello");
//         })
//         .catch((err) => {
//             res.status(500).json(err);
//         });
// });
router.get("/", homeController.getHome);

module.exports = router;
