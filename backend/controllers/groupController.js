// controllers/groupController.js
const Group = require('../models/Group');

// Create a new group
exports.createGroup = async (req, res) => {
  const { name, investmentAmount } = req.body;
  try {
    const group = new Group({ name, investmentAmount });
    await group.save();
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create group' });
  }
};

// Get all groups
exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
};
