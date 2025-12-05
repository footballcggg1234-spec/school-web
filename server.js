const path = require('path'); // สำคัญมาก
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/'))); // บรรทัดแก้ Cannot GET /

// เชื่อมต่อ Database
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://ises12345678927_db_user:rungradit@cluster0.yzy6h0n.mongodb.net/?appName=Cluster0')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');
const eventRoutes = require('./routes/eventRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/api/news', newsRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));