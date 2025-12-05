require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // อนุญาตให้ Frontend ยิงเข้ามาได้
app.use(express.json()); // อ่านค่า JSON ที่ส่งมาได้

// เชื่อมต่อ MongoDB
// (สร้างไฟล์ .env แล้วใส่ MONGO_URI=mongodb://localhost:27017/schoolDB หรือใช้ Cloud URL)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');
// const eventRoutes = require('./routes/eventRoutes'); // (ทำเพิ่มทีหลัง)

app.use('/api/news', newsRoutes);
// app.use('/api/events', eventRoutes);

// รัน Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
mongodb+srv://admin:1234@cluster0.8counxn.mongodb.net/?appName=Cluster0