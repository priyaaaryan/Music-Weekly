//const path = require("path");
const { Post } = require("../models");
const home = (req, res) => {
  // return res.sendFile(path.join(`${__dirname}/../views/layouts/main.handlebars`));
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      // res.render("all-posts", { posts });
      res.send("Hello");
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  getHome: home,
};
