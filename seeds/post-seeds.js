const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content_txt: 'Hello Again',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content_txt: 'Hello',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
