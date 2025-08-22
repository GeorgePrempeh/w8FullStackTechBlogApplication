const { Category } = require('../models');

module.exports = {
  getAll: async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
  }
};
