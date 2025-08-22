const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  },
  {
    sequelize,
    modelName: 'category'
  }
);

module.exports = Category;
