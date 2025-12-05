// 1. นำเข้า path module และ dependencies
const path = require('path'); 
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 2. FIX: สั่งให้ Express แจกไฟล์ HTML จาก Root Folder
app.use(express.static(path.join(__dirname, '/'))); 

// เชื่อมต่อ MongoDB (ไม่มี options เก่า)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');
const eventRoutes = require('./routes/eventRoutes'); 
const studentRoutes = require('./routes/studentRoutes'); // API นักเรียน

app.use('/api/news', newsRoutes);
app.use('/api/events', eventRoutes); 
app.use('/api/students', studentRoutes); 

// รัน Server
const PORT = process.env.ENV || process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});