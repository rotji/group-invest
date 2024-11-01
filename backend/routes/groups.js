const express = require('express');
const { getGroups, createGroup } = require('../controllers/groupController'); // Import functions from groupController
const router = express.Router();

// Route to get all groups
router.get('/', getGroups);

// Route to create a new group
router.post('/', createGroup);

module.exports = router;
