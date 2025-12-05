require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Serve frontend static files from project root (index.html is in the repo root)
app.use(express.static(path.join(__dirname, '/')));

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://admin:<db_password>@cluster0.8counxn.mongodb.net/?appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/api/news', newsRoutes);
app.use('/api/students', studentRoutes);
// app.use('/api/events', eventRoutes); // (ถ้ามี)

// รัน Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// ในไฟล์ server.js

// ... (หลัง const newsRoutes = require('./routes/newsRoutes'); )
const eventRoutes = require('./routes/eventRoutes'); // <-- เพิ่มบรรทัดนี้

// ...
app.use('/api/news', newsRoutes); 
app.use('/api/events', eventRoutes); // <-- เพิ่มบรรทัดนี้
// ...
// 1. นำเข้า path module (สำคัญมากสำหรับ Render)
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
const studentRoutes = require('./routes/studentRoutes'); // สำหรับข้อมูลนักเรียน

app.use('/api/news', newsRoutes);
app.use('/api/events', eventRoutes); 
app.use('/api/students', studentRoutes); // API ข้อมูลนักเรียน

// รัน Server
const PORT = process.env.ENV || process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});