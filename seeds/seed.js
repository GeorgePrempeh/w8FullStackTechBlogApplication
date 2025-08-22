const sequelize = require('../config/connection');
const { User, Category, Post } = require('../models');

const seed = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate([
    { username: 'alice', email: 'alice@email.com', password: 'password123' },
    { username: 'bob', email: 'bob@email.com', password: 'password123' }
  ], { individualHooks: true });

  const categories = await Category.bulkCreate([
    { name: 'JavaScript' },
    { name: 'Node.js' },
    { name: 'MySQL' }
  ]);

  await Post.bulkCreate([
    { title: 'Intro to JS', content: 'JavaScript basics...', userId: users[0].id, categoryId: categories[0].id },
    { title: 'Node.js Tips', content: 'Node.js is awesome...', userId: users[1].id, categoryId: categories[1].id }
  ]);

  console.log('Database seeded!');
  process.exit(0);
};

seed();
