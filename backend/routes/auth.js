// backend/routes/auth.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register Route (without password)
router.post('/register', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login Route (without authentication)
router.post('/login', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User logged in', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
