require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');

app.use('/api/news', newsRoutes);
// app.use('/api/events', eventRoutes); // (ถ้ามี)

// รัน Server
const PORT = process.env.ENV || process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});