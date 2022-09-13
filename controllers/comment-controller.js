const { Comment } = require("../models/");
const commentController = {
  createComment: (req, res) => {
    Comment.create({ ...req.body, user_id: req.session.user_id })
      .then((newComment) => {
        console.log(">>>>>COMMENT CREATED!");
        res.json(newComment);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
    updateComment: (req, res) => {
      console.log("REQ BODY="+JSON.stringify(req.body))
        Comment.update({
        id: req.params,
            ...req.body
        }).then((updatedComment)=>{
            res.json(updatedComment);
        }).catch((err)=>{
            res.status(500).json(err);
        })
    }
};
module.exports = commentController;
