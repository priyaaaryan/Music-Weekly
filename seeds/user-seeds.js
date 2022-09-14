const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Preran Shukla',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    bio: 'This all I can say about my self'
  },
  {
    username: 'Tara Evan',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    bio: 'This all I can say about my self'

  },
  {
    username: 'Priya Bakshi',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    bio: 'This all I can say about my self'

  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    bio: 'This all I can say about my self'

  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
    bio: 'This all I can say about my self'

  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    bio: 'This all I can say about my self'

  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    bio: 'This all I can say about my self'

  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    bio: 'This all I can say about my self'}
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
