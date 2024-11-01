const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import auth routes
const groupRoutes = require('./routes/groups'); // Import group routes

dotenv.config();  // Loads environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection setup
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/api/auth', authRoutes); // Use the auth routes for /api/auth path
app.use('/api/groups', groupRoutes); // Use the group routes for /api/groups path

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
