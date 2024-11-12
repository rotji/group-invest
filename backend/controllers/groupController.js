// controllers/groupController.js
const Group = require('../models/Group');

// Controller to get all groups
const getGroups = async (req, res) => {
  try {
    const groups = await Group.find(); // Retrieve all groups from the database
    console.log('Fetched groups:', groups); // Debugging line
    res.json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ message: 'Error fetching groups', error });
  }
};

// Controller to create a new group
const createGroup = async (req, res) => {
  try {
    const { name, investmentAmount, groupType } = req.body;
    console.log('Received data for creating group:', { name, investmentAmount, groupType });

    // Validate required fields
    if (!name || !investmentAmount || !groupType) {
      return res.status(400).json({ message: 'All fields (name, investmentAmount, groupType) are required' });
    }

    const newGroup = new Group({
      name,
      investmentAmount,
      groupType, // Ensure groupType is saved (Public or Private)
      members: 0, // Initialize members count
    });

    const savedGroup = await newGroup.save();
    console.log('Group saved successfully:', savedGroup);
    res.status(201).json({ message: 'Group created successfully', group: savedGroup });
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ message: 'Error creating group', error });
  }
};

// Controller to join a group
const joinGroup = async (req, res) => {
  try {
    const { groupId } = req.params; // Extract groupId from URL params
    console.log('Group ID to join:', groupId);

    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    // Increment the members count
    group.members += 1;
    const updatedGroup = await group.save();

    console.log(`Joined group successfully. Updated members count: ${updatedGroup.members}`);
    res.json({ message: 'Joined group successfully', group: updatedGroup });
  } catch (error) {
    console.error('Error joining group:', error);
    res.status(500).json({ message: 'Error joining group', error });
  }
};

module.exports = { getGroups, createGroup, joinGroup };
