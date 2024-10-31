// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // We won't add password here since there's no authentication at this stage
});

module.exports = mongoose.model('User', UserSchema);
