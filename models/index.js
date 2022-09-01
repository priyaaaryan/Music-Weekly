const User = require('./User');
const Post = require("./Post");
const Comment = require("./Comments");
const Image = require("./image.model")
module.exports = { User, Post, Comment,Image};

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

User.hasOne(Image,{
  through: Image,
  as: 'profile_image',
  foreignKey: 'user_id'
})