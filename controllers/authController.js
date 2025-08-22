const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({ username, email, password });
      req.session.userId = user.id;
      res.status(201).json({ message: 'User registered', user: { id: user.id, username: user.username } });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user || !user.checkPassword(password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      req.session.userId = user.id;
      res.json({ message: 'Logged in', user: { id: user.id, username: user.username } });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  logout: (req, res) => {
    req.session.destroy(() => {
      res.json({ message: 'Logged out' });
    });
  }
};
