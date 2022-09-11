const { Post, Users, Comment } = require("../models");
const postController = {
  loadAllPostsPage: (req, res) => {
    console.log("======================");
    Post.findAll({
      // Query configuration
      attributes: ["id", "content_txt", "title", "created_at"],
      //Join the user tables
      include: [
        {
          model: Users,
          attributes: ["username"],
        },
      ],
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createPost: (req, res) => {
    Post.create({
      title: req.body.title,
      content_txt: req.body.content_txt,
      attached_type: req.body.attached_type,
      user_id: "1",
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  loadSinglePostPage: (req, res) => {
    Post.findByPk(req.params.id, {
      include: [
        Users,
        {
          model: Comment,
          include: [Users],
        },
      ],
    })
      .then((dbPostData) => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          console.log("YOYOYOYOYOYOYOYO");
          console.log(JSON.stringify(post));
          res.render("single-post", { post, loggedIn: true });
        } else {
          res.status(404).end();
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = postController;
