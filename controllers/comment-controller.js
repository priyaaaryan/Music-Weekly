const { Comment } = require("../models/");
const commentController = {
  createComment: (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId })
      .then((newComment) => {
        res.json(newComment);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
module.exports = commentController;
