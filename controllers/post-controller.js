const { Post, User } = require("../models");
const postController = {
  loadAllPostsPage: (req, res) => {
    console.log("======================");
    Post.findAll({
      // Query configuration
      attributes: ["id", "post_url", "title", "created_at"],
      //Join the user tables
      include: [
        {
          model: User,
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
      attached_type:req.body.attached_type,
      user_id: req.body.user_id,
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
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    })
      .then((dbPostData) => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });

          res.render("single-post", { post,loggedIn :false });
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
