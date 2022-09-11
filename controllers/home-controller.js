const router = require("express").Router();
const { Post, Users } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/blog", (req, res) => {
  res.render("blog", { loggedIn: req.session.loggedIn });
});

router.get("/musicians", (req, res) => {
  res.render("musicians");
});

router.get("/classroom", (req, res) => {
  Post.findAll({
    // Query configuration
    attributes: ["id", "title", "created_at", "content_txt", "attached_type"],
    //Join the user tables
    include: [
      {
        model: Users,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log("LOOK HERE" + JSON.stringify(dbPostData));
      res.render("classroom", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
