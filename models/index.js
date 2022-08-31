const User = require('./User');
const Post = require("./Post");
const Upload = require("./Upload");
module.exports = { User, Post , Upload};

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Upload.belongsTo(User, {
    foreignKey: 'user_id',
  });