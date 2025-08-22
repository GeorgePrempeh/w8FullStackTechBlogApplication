const User = require('./User');
const Post = require('./Post');
const Category = require('./Category');

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Post, { foreignKey: 'categoryId', onDelete: 'SET NULL' });
Post.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = { User, Post, Category };
