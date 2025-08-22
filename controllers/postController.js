const { Post, Category } = require('../models');

module.exports = {
  getAll: async (req, res) => {
    const { category } = req.query;
    const where = category ? { categoryId: category } : {};
    const posts = await Post.findAll({ where, include: [Category] });
    res.json(posts);
  },
  create: async (req, res) => {
    try {
      if (!req.session.userId) return res.status(401).json({ error: 'Unauthorized' });
      const { title, content, categoryId } = req.body;
      const post = await Post.create({ title, content, categoryId, userId: req.session.userId });
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post || post.userId !== req.session.userId) return res.status(403).json({ error: 'Forbidden' });
      await post.update(req.body);
      res.json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post || post.userId !== req.session.userId) return res.status(403).json({ error: 'Forbidden' });
      await post.destroy();
      res.json({ message: 'Post deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
