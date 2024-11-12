const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const groupRoutes = require('./routes/groups');

dotenv.config();

// Log database URL for debugging
console.log('Database URL:', process.env.DATABASE_URL);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for cross-origin requests
app.use(cors());

// MongoDB connection setup with options
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(`Connected to MongoDB at ${process.env.DATABASE_URL}`))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);

// Example route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
