// models/group.js
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  investmentAmount: {
    type: Number,
    required: true,
  },
  groupType: {
    type: String,
    enum: ['Public', 'Private'],
    required: true,
  },
  members: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
