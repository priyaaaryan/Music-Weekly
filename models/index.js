const User = require('./User');
const Post = require("./Post");
const Comment = require("./Comments");
module.exports = { User, Post, Comment};

// create associations
User.belongsToMany(Post, {
  through: Comment,
  as: 'comment_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Comment,
  as: 'comment_posts',
  foreignKey: 'post_id'
});

