require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files from project root
app.use(express.static(path.join(__dirname)));

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');
app.use('/api/news', newsRoutes);

// Routes conditionally loaded if files exist
try {
  const eventRoutes = require('./routes/eventRoutes');
  app.use('/api/events', eventRoutes);
} catch (e) {
  console.warn('eventRoutes not found, skipping /api/events');
}

try {
  const studentRoutes = require('./routes/studentRoutes');
  app.use('/api/students', studentRoutes);
} catch (e) {
  console.warn('studentRoutes not found, skipping /api/students');
}

// รัน Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});