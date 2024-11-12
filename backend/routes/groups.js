const express = require('express');
const { getGroups, createGroup, joinGroup } = require('../controllers/groupController');
const Group = require('../models/Group'); // Ensure you have your Group model correctly imported
const router = express.Router();

// Route to get all groups
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ error: 'Failed to fetch groups' });
  }
});

// Route to create a new group
router.post('/', async (req, res) => {
  const { name, investmentAmount, groupType } = req.body;
  try {
    const newGroup = new Group({
      name,
      investmentAmount,
      groupType, // Added group type (Public/Private)
      members: 0, // Initial members count set to 0
    });
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ error: 'Failed to create group' });
  }
});

// Route to join a group
router.post('/:groupId/join', async (req, res) => {
  const { groupId } = req.params;
  try {
    // Find the group by ID and increment the members count
    const updatedGroup = await Group.findByIdAndUpdate(
      groupId,
      { $inc: { members: 1 } },
      { new: true }
    );

    if (!updatedGroup) {
      return res.status(404).json({ error: 'Group not found' });
    }

    res.status(200).json(updatedGroup);
  } catch (error) {
    console.error('Error joining group:', error);
    res.status(500).json({ error: 'Failed to join group' });
  }
});

module.exports = router;
