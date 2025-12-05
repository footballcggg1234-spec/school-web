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
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Error:', err));

// เรียกใช้ Route ข่าวอย่างเดียว (อันอื่นตัดทิ้งกัน Error)
const newsRoutes = require('./routes/newsRoutes');
app.use('/api/news', newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));