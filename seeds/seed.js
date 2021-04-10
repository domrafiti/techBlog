const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json'); //updated to postData
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) { //updated to post
    await Post.create({ //updated to post
      ...post, //updated to post
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.create(commentData);

  // const seedGallery = () => Gallery.bulkCreate(gallerydata);

  // for (const comment of commentData) {
  //   await Comment.create({ ...comment });
  // }

  process.exit(0);
};

seedDatabase();
