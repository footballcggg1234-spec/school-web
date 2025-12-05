// ในไฟล์ server.js (Final Fix)
// ในไฟล์ server.js (Final Fix)

// 1. นำเข้า path module (สำคัญสำหรับ Render)
const path = require('path'); 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 2. FIX: สั่งให้ Express แจกไฟล์ HTML จาก Root Folder (แก้ปัญหา Cannot GET /)
app.use(express.static(path.join(__dirname, '/'))); 

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');
const eventRoutes = require('./routes/eventRoutes'); 
const studentRoutes = require('./routes/studentRoutes');

app.use('/api/news', newsRoutes);
app.use('/api/events', eventRoutes); 
app.use('/api/students', studentRoutes); 

// รัน Server
const PORT = process.env.ENV || process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});